
//Evento de aviso quando clicar no botão de enviar
document.getElementById("enviar").addEventListener("click" , validaForm );


  //verifica se o formulario foi preenchido completamente ao ser enviado
function validaForm(){

  //variaveis que trazem insformações do documento html conforme id
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var tel = document.getElementById("tel").value;


  if(nome != "" && email != "" && tel != ""){
    alert("Prontinho, " + nome + "! Você receberá os dados por e-mail!");
  }else{
    alert("Preencha todas as informações.")
  }
}
