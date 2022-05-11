// api key = 4BRmrLBBB1Cwrz53RdZAdK0Nxob5FFmUpZ2RflnM

$(document).ready(function () {
    $("#btn").click(function (e) {
        e.preventDefault();
        sendRequest();
    });

    async function sendRequest() {
        const apiKey = "4BRmrLBBB1Cwrz53RdZAdK0Nxob5FFmUpZ2RflnM";
        const inData = $("#inData").val();
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${inData}`);
        console.log(response);
        const data = await response.json();
        console.log(data);

        document.querySelector('#tituloImg').innerHTML = data.title;
        document.querySelector('#explainImg').innerHTML = data.explanation;

        if (data.media_type == "image") {
            document.querySelector('#imgNasa').innerHTML = `<br><img width="700px" height="500px" src="${data.url}">`;
        } else {
            document.querySelector('#imgNasa').innerHTML = `<br><iframe width="700px" height="500px" src="${data.url}">`;
        }
    }
});