// api key = 4BRmrLBBB1Cwrz53RdZAdK0Nxob5FFmUpZ2RflnM

$(document).ready(function () {
    $("#btn").click(function (e) {
        e.preventDefault();
        sendRequest();
    });

    async function sendRequest() {
        let apiKey = "4BRmrLBBB1Cwrz53RdZAdK0Nxob5FFmUpZ2RflnM";
        let inData = $("#inData").val();
        let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${inData}`);
        console.log(response);
        let data = await response.json();
        console.log(data);

        document.querySelector('h1').innerHTML = data.title;
        document.querySelector('#texto').innerHTML = data.explanation;

        if (data.media_type == "image") {
            document.querySelector('#imgNasa').innerHTML = `<br><img width="700px" height="500px" src="${data.url}">`;
        } else {
            document.querySelector('#imgNasa').innerHTML = `<br><iframe width="700px" height="500px" src="${data.url}">`;
        }
    }
});