// Importe o axios
import axios from "axios";

// Defina o endereço de um vídeo remoto
var url = "https://example.com/video.mp4";

// Defina o cabeçalho padrão do VLC
var header = {
  "User-Agent": "VLC/3.0.16 LibVLC/3.0.16",
  Accept: "*/*",
  Range: "bytes=0-",
  Connection: "close",
};

// Defina a configuração do axios
var config = {
  headers: header,
  responseType: "blob", // Para receber o vídeo como um blob
};

// Faça uma requisição GET usando o axios
axios
  .get(url, config)
  .then(function (response) {
    // Se a requisição for bem sucedida, faça algo com a resposta
    console.log(response);
    // Por exemplo, crie um elemento de vídeo e reproduza o vídeo
    var video = document.createElement("video");
    video.src = URL.createObjectURL(response.data);
    video.controls = true;
    document.body.appendChild(video);
    video.play();
  })
  .catch(function (error) {
    // Se a requisição falhar, faça algo com o erro
    console.error(error);
  });
