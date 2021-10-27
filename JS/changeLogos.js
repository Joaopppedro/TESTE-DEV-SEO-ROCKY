// altera imagem da logo de acordo com o tamanho da tela
function changeImages(){
    let largura = window.innerWidth
    if(largura <= 991.98){
      document.getElementById("headerLogo").src = "img/mobile/logo.png"
      document.getElementById("logo-footer").src = "img/mobile/logo.png"
    }
    else{
      document.getElementById("headerLogo").src = "img/web/logo.png"
      document.getElementById("logo-footer").src = "img/web/logo.png"
    }
  }
