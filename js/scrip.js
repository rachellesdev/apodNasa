// api key = 4BRmrLBBB1Cwrz53RdZAdK0Nxob5FFmUpZ2RflnM

// adicionando um evento ao botão para rodar a função sendRequest ao ser clicado
$(document).ready(function () {
    $("#btn").click(function (e) {
        e.preventDefault();
        sendRequest();
    });

    // função assincrona que vai buscar os dados da API
    async function sendRequest() {
        const apiKey = "4BRmrLBBB1Cwrz53RdZAdK0Nxob5FFmUpZ2RflnM";
        const inData = $("#inData").val();
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${inData}`);
        console.log(response);
        const data = await response.json();
        console.log(data);

        // utilizando os dados encontrados na API
        document.querySelector('#tituloImg').innerHTML = data.title;
        document.querySelector('#explainImg').innerHTML = data.explanation;

        // verificando se o tipo de midia encontrado é video ou imagem para saber se deve-se utilizar a tag img ou iframe
        if (data.media_type == "image") {
            document.querySelector('#imgNasa').innerHTML = `<br><img width="700px" height="500px" src="${data.url}">`;
        } else {
            document.querySelector('#imgNasa').innerHTML = `<br><iframe width="700px" height="500px" src="${data.url}">`;
        }
    }
});