// Adicione a classe ativo a todos os itens do menu
const menuItems = document.querySelectorAll('.menu li');
console.log(menuItems)

menuItems.forEach(item =>{
  item.classList.add('ativo')
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
items = 1;
menuItems.forEach(items => {
  items.classList.remove('ativo')
  console.log(items)
})

// Verifique se as imagens possuem o atributo alt
imgs = document.getElementsByTagName('img');

imgsArray = Array.from(imgs);

imgsArray.forEach(imgs , index =>{
  if(imgs[imgs].hasAttribute('alt') = false){
    console.log(imgs)
  }
})


// Modifique o href do link externo no menu

