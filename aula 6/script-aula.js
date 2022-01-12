const img = document.querySelector('img');

function clickou () {
  console.log('clickou')
}

// img.addEventListener('click', clickou)

const list = document.querySelector('.animais-lista')
console.log(list);

function callbackLista (event){
  console.log(event.target)
}

list.addEventListener('click', callbackLista)

const linkExterno = document.querySelector('a[href^="http"]')

function handleLink (event){
  event.preventDefault();
  console.log(event)
}

linkExterno.addEventListener('click', handleLink);


