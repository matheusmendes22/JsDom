// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImage = document.querySelector('img');

console.log(firstImage.offsetTop);


// Retorne a soma da largura de todas as imagens

function somaWidth (){
  let images = document.querySelectorAll('img');
  let soma = 0;
  
  images.forEach(imagem => {
    soma += imagem.offsetWidth;
  });
  console.log(soma)
}

window.onload = function() {
  somaWidth();
}


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
  let buttons = document.querySelectorAll('a')
  console.log(buttons)

  buttons.forEach(button => {

    let rectButtons = button.getBoundingClientRect();
    if(rectButtons.width >= 48 && rectButtons.height >= 48){
      console.log('Os botoes são bons para o mobile')
    }else{
      console.log('os botões não são bons para o mobile')
    }
  })


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const mobile = window.matchMedia(' (max-width: 720px) ')
const menu = document.querySelector('.menu');

if(mobile.matches){
  menu.classList.add('menu' , 'menu-mobile' )
}
