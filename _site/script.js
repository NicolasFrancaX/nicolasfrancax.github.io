const botaoEnviar = document.getElementById("enviarBotao");

botaoEnviar.addEventListener("click", (e) => {
  e.preventDefault()
  botaoEnviar.innerText = "Enviado 🛫";
  setTimeout(() => {
    location.reload(true)
  }, 2000)
});
