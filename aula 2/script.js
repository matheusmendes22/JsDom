// Retorne no console todas as imagens do site
let imagens = document.getElementsByTagName('img')
console.log(imagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem
let imagensImagens = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imagensImagens)

// Selecione todos os links internos (onde o href começa com #)
let hrefs = document.querySelectorAll('a[href^="#"]')

console.log(hrefs)
// Selecione o primeiro h2 dentro de .animais-descricao
let animasDescricaoH2 = document.querySelector('.animais-descricao h2')

console.log(animasDescricaoH2)

// Selecione o último p do site
let paragrafos = document.querySelectorAll('p');
console.log(paragrafos[--paragrafos.length])
