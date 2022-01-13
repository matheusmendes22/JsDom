function activeTabs (){
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')
    
    tabContent[0].classList.add('ativo')

    if(tabContent.length && tabMenu.length){
        function activeTab (index){
            tabContent.forEach(section =>{
                section.classList.remove('ativo')
            })
            tabContent[index].classList.add('ativo');
        }
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            } )
        })
    }
}

function activeAccordion(){
    const accordionTrigger = document.querySelectorAll('.faq-lista dt')
    console.log(accordionTrigger);

    function callbackAccordion(){
        this.nextElementSibling.classList.toggle('ativo');
    }

    accordionTrigger.forEach(item => {
        item.addEventListener('click', callbackAccordion)
    })
}

activeTabs();
activeAccordion();