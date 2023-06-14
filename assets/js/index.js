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
});

let prevScrollPos = window.scrollY;
let header = document.querySelector('.header');
document.addEventListener("click", (e) => {
    if(e.target.closest('#inicio--open-dialog')) {
        document.getElementById("inicio__dialog").showModal();
    }
    if(e.target.closest('#inicio--close-dialog')) {
        document.getElementById("inicio__dialog").close();
    }
});

window.addEventListener('scroll', function() {
  const currentScrollPos = window.scrollY;
  
  if (currentScrollPos > prevScrollPos) {
    // El scroll está bajando
    header.classList.add('header--hide');
    
  } else {
    // El scroll está subiendo
    header.classList.remove('header--hide');
  }
  
  prevScrollPos = currentScrollPos;
});


const cargarBibliotecas = (json,inicio,fin) => {
    const bibliotecaBbdds = document.querySelector(".biblioteca-virtual_bbdds");
    const template = document.querySelector(".template-biblioteca-virtual-bbdd").content;
    const fragment = document.createDocumentFragment();



    json.slice(inicio, fin).forEach(bbdd => {
        const clone = template.cloneNode(true);
        const bibliotecaBbdd = clone.querySelector(".biblioteca-bbdd");
        const bbddTitulo = clone.querySelector(".bbdd-titulo");
        const bbddContenido = clone.querySelector(".bbdd-contenido");
        const bbddImagen = clone.querySelector(".bbdd-imagen img");
        const bbddLink = clone.querySelector(".bbdd-link");
        const faSolid = clone.querySelector(".fa-solid");
        bibliotecaBbdd.dataset.categoria = bbdd.categoria;
        bbddTitulo.textContent = bbdd.titulo;
        bbddContenido.textContent = bbdd.contenido;
        bbddImagen.src = `assets/img/logos/${bbdd.imagen}`;
        bbddLink.href = bbdd.link;
        faSolid.classList.add(
            (bbdd.categoria) === "acceso libre"
            ? "fa-lock-open"
            : "fa-lock"
        );
        fragment.appendChild(clone);
    });
    bibliotecaBbdds.innerHTML = "";
    bibliotecaBbdds.appendChild(fragment);
};
const cargarDataBibliotecas = (filter="all") => {
    fetch("bbdd.json")
    .then(rs => rs.ok ? rs.json() : Promise.reject(rs))
    .then(json => {
        if(filter !== "all") {
            json = json.filter(bbdd => bbdd.categoria === filter);
        }
        cargarBibliotecas(json,0,5);
        let tamanio = json.length;
        let cantidadMostrar = 5;
        let cantidadBotones = Math.ceil(tamanio / cantidadMostrar);
        let paginacion = document.querySelector(".bbdd_pagination");
        let fragment = document.createDocumentFragment();
        for (let i = 1; i <= cantidadBotones; i++) {
            let boton = document.createElement("button");
            boton.textContent = i;
            fragment.appendChild(boton);
        }
        paginacion.innerHTML = "";
        paginacion.appendChild(fragment);
        let botones = document.querySelectorAll(".bbdd_pagination button");
        botones[0].classList.add("active");
        botones.forEach(boton => {
            boton.addEventListener("click", (e) => {
                let cantidadMostrar = 5;
                let pagina = e.target.textContent;
                let inicio = (pagina - 1) * cantidadMostrar;
                let fin = inicio + cantidadMostrar;
                cargarBibliotecas(json, inicio, fin);
                botones.forEach(boton => {
                    boton.classList.remove("active");
                });
                e.target.classList.add("active");
            });
        });
    });
}