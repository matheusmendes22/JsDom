const imgs = document.querySelectorAll('img')


// no argumento da função de callback pode passar qualquer nome que sem vai retornar o valor, porem a boa pratica e sempre colocar um nome que faça relação com o item do array do foreach 

// ordem dos parametros da função de callback : 1- item, 2- index e o ultimo é o array em si

let i = 0;
imgs.forEach(function(img){
    // console.log(img)
});


// transformar um elemento normal em array com o Array.from
let titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(titulo){
    // console.log(titulo)
})


// Arrow function 
titulosArray.forEach((item,index) =>{
    // console.log(index)
})

// foreach com arrow function encurtado

titulosArray.forEach((item) => console.log(item));