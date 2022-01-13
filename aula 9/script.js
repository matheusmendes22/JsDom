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
    const accordionTrigger = document.querySelectorAll('.js-acordion dt')
    const activeClass = 'ativo';

    accordionTrigger[0].classList.add(activeClass) || accordionTrigger[0].nextElementSibling.classList.add(activeClass)

    if(accordionTrigger.length){
        function callbackAccordion(){
            this.classList.toggle(activeClass)
            this.nextElementSibling.classList.toggle(activeClass);
        }
    
        accordionTrigger.forEach(item => {
            item.addEventListener('click', callbackAccordion)
        })
    }
}

activeTabs();
activeAccordion();