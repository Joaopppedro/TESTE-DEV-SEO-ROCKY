// active/desactive side bar
let active = false
// largura inicial da pagina (altera imagens de acordo com a tela)
changeImages()

function show() {
  if (active !== false) {
    active = false

    // document.getElementById('sidebar').style.marginLeft = '-100%'
    document.getElementById('sidebar').classList.remove("ativo");
    document.getElementById('sidebar').classList.add("desativo");
    
    // document.getElementById('togglerButton').style.transitionDuration = '0.2s'
    // document.getElementById('togglerButton').style.left = '5%';
    document.getElementById('togglerButton').classList.remove("toggle-btn-active");
    document.getElementById('togglerButton').classList.add("toggle-btn-desactive");
    // span 1
    // document.getElementById("spanBar1").style.transform = 'rotate(0deg)'
    // document.getElementById("spanBar1").style.marginTop = '0%'
    document.getElementById('spanBar1').classList.remove("spanBar-1-active");
    document.getElementById('spanBar1').classList.add("spanBar-1-desactive");
    // span 2
    // document.getElementById("spanBar2").style.opacity = '1'
    document.getElementById('spanBar2').classList.remove("spanBar-2-active");
    document.getElementById('spanBar2').classList.add("spanBar-2-desactive");
    // span 3
    // document.getElementById("spanBar3").style.transform = 'rotate(0deg)'
    // document.getElementById("spanBar3").style.marginTop = '20%'
    document.getElementById('spanBar3').classList.remove("spanBar-3-active");
    document.getElementById('spanBar3').classList.add("spanBar-3-desactive");
  }
  else {
    active = true

    // document.getElementById('sidebar').style.marginLeft = '135%'
    document.getElementById('sidebar').classList.remove("desativo");
    document.getElementById('sidebar').classList.add("ativo");

    // document.getElementById('togglerButton').style.transitionDuration = '0.3s'
    // document.getElementById('togglerButton').style.left = '40%';
    document.getElementById('togglerButton').classList.remove("toggle-btn-desactive");
    document.getElementById('togglerButton').classList.add("toggle-btn-active");

    // span 1
    // document.getElementById("spanBar1").style.transform = 'rotate(-45deg)'
    // document.getElementById("spanBar1").style.marginTop = '20%'
    document.getElementById('spanBar1').classList.remove("spanBar-1-desactive");
    document.getElementById('spanBar1').classList.add("spanBar-1-active");
    // span 2
    // document.getElementById("spanBar2").style.opacity = '0'
    document.getElementById('spanBar2').classList.remove("spanBar-2-desactive");
    document.getElementById('spanBar2').classList.add("spanBar-2-active");
    // span 3
    // document.getElementById("spanBar3").style.transform = 'rotate(45deg)'
    // document.getElementById("spanBar3").style.marginTop = '-38.5%'
    document.getElementById('spanBar3').classList.remove("spanBar-3-desactive");
    document.getElementById('spanBar3').classList.add("spanBar-3-active");
  }
}

var timeRotate = 0
  setInterval(function(){
    if(timeRotate){
      // blog-h1
      document.getElementById("blog-h1").style.transform = 'rotate(0deg)';
      // blog-img
      document.getElementById("blog-img").style.transform = 'rotate(0deg)';
      // console.log(timeRotate)
      timeRotate = 0
    }
    else{
      // blog-h1
      document.getElementById("blog-h1").style.transform = 'rotate(-15deg)';
      // blog-img
      document.getElementById("blog-img").style.transform = 'rotate(15deg)';
      // console.log(timeRotate)
      timeRotate = 1
    }
    
  }, 1000)