document.addEventListener('DOMContentLoaded', () => {
    const hamburguer = document.querySelector('.header__nav_hamburger');
    const menu = document.querySelector('.header__nav_list');
    hamburguer.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
    const list__desplegable = document.querySelectorAll('.list__desplegable');
    list__desplegable.forEach((list) => {
        list.addEventListener('mouseover', (e) => {
            list.firstElementChild.lastElementChild.classList.add('rotate');
            list.lastElementChild.classList.add('show');
        });
        list.addEventListener('mouseout', (e) => {
            list.firstElementChild.lastElementChild.classList.remove('rotate');
            list.lastElementChild.classList.remove('show');
        });
        // el primer hijo va a ser el responsable de desplegar el menu, cualquier otro elemento no lo hara
        list.addEventListener('click', (e) => {
            if(e.target==list.firstElementChild){
                e.preventDefault();
                list.firstElementChild.lastElementChild.classList.toggle('rotate');
                list.lastElementChild.classList.toggle('show');
            }
            e.stopPropagation();
        });

    });

});