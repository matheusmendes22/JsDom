// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
// let links = document.querySelectorAll('a[href^="#"]');

// function handleLink (event) {
//   links.forEach(item => {
//     item.classList.remove('active');
//   });

//   event.currentTarget.classList.add('active');
//   event.preventDefault();
// }

//   links.forEach(link => {
//     link.addEventListener('click', handleLink);
//   })



// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// let all = document.querySelectorAll('body *')

// function handleTag (event) {
//   console.log(event.currentTarget);
// }

// all.forEach(tag =>{
//   tag.addEventListener('click', handleTag)
// })


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
// let all = document.querySelectorAll('body *')

// function handleTag (event) {
//   event.currentTarget.remove();
// }

// all.forEach(tag =>{
//   tag.addEventListener('click', handleTag)
// })

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
let textSelection = document.querySelectorAll('p, h1, h2')

function upperText (event) {
  if(event.key === 't'){
    document.documentElement.classList.toggle('upper');
  }
}

window.addEventListener('keydown', upperText)


