document.addEventListener('DOMContentLoaded', () => {
    const matchMediaMobile = window.matchMedia('(max-width: 768px)').matches;
    const hamburguer = document.querySelector('.header__nav_hamburger');
    const menu = document.querySelector('.header__nav_list');

    hamburguer.addEventListener('click', () => {
        hamburguer.querySelector('.fa-solid').classList.toggle('fa-bars');
        hamburguer.querySelector('.fa-solid').classList.toggle('fa-close');
        menu.classList.toggle('show');

    });

    const list__desplegable = document.querySelectorAll('.list__desplegable');
    list__desplegable.forEach((list) => {
        //estos eventos solo deberian ejecutarse en desktop ya que en mobile se despliega con el click
        if (!matchMediaMobile) {
            list.addEventListener('mouseenter', (e) => {
                list.firstElementChild.lastElementChild.classList.add('rotate');
                list.lastElementChild.classList.add('show');
            });
            list.addEventListener('mouseleave', (e) => {
                list.firstElementChild.lastElementChild.classList.remove('rotate');
                list.lastElementChild.classList.remove('show');
            });
        }
        //el primer hijo va a ser el responsable de desplegar el menu, cualquier otro elemento no lo hara
        list.addEventListener('click', (e) => {
            const firstChild = list.firstElementChild;
            if (e.target == firstChild || e.target.matches(`${firstChild.tagName} *`)) {
                list.firstElementChild.lastElementChild.classList.toggle('rotate');
                list.lastElementChild.classList.toggle('show');
                e.preventDefault();
            }
            e.stopPropagation();
        });
    });

    // FORMULARIO
    const opendialog = document.getElementById("inicio--open-dialog");
    const closedialog = document.getElementById("inicio--close-dialog");
    const dialog = document.getElementById("inicio__dialog");

    opendialog.addEventListener("click", () => {
        dialog.showModal();
    });
    closedialog.addEventListener("click", () => {
        dialog.close();
    });
});