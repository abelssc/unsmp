const routes = {
    // INSTITUCIONAL
    "#informacion-general": "informacion-general.html",
    "#historia": "historia.html",
    "#directorio": "directorio.html",
    "#reglamento": "reglamento.html",
    "#nuestra-coleccion": "nuestra-coleccion.html",
    "#contacto": "contacto.html",
    // SERVICIOS
    "#biblioteca-virtual": "biblioteca-virtual.html",
    "#repositorio-academico": "repositorio-academico.html",
    "#ultimas-adquisiciones": "ultimas-adquisiciones.html",
    "#infonautas": "infonautas.html",
    // INTERESES
    "#blog-sibus": "blog-sibus.html",
    "#enlaces-interes": "enlaces-interes.html",
    "#guias-manuales":"guias-manuales.html",
    "#martino":"martino.html",
    "#novedades":"novedades.html",
};
const hashes = Object.keys(routes);
const Render = ($contenido, $hash) => {
    const nav_routes = document.getElementById("routes");
    nav_routes.querySelectorAll("a").forEach(link => link.classList.remove('active'));
    nav_routes.querySelector(`[href="${$hash}"]`).classList.add("active");
    const menu = document.querySelector('.header__nav_list');
    const hamburguer = document.querySelector('.header__nav_hamburger');
    menu.classList.remove('show');
    hamburguer.querySelector('.fa-solid').classList.remove('fa-close');
    hamburguer.querySelector('.fa-solid').classList.add('fa-bars');

    document.getElementById("root").innerHTML = $contenido;
    cargarData($hash);
};
const cargarData = ($hash) => {
    switch ($hash) {
        case "#contacto":
            const personalBibliotecaCentral = [
                {
                    nombre: "KORELIA EDITH ALHUAY ALIAGA",
                    cargo: "Jefa de la Biblioteca Central",
                    correo: "kalhuaya@usmp.pe",
                    foto: ""
                },
                {
                    nombre: "SUSAN MIRELLA ERAZO PADILLA",
                    cargo: "Gestión de Procesos - Repositorio Académico",
                    correo: "repositorio@usmp.pe",
                    foto: ""
                },
                {
                    nombre: "LESLIE KARINA CARLOS MEJIA",
                    cargo: "Encargada en el area de Procesos Tecnicas",
                    correo: "lcarlosm@usmp.pe",
                    foto: ""
                },
                {
                    nombre: "CESAR MANUEL KOHASHIKAWA NOGEN",
                    cargo: "Gestión de Procesos - Repositorio Académico",
                    correo: "ckohashikawan@usmp.pe",
                    foto: ""
                },
                {
                    nombre: "HECTOR SALAZAR MENDOZA",
                    cargo: "Tecnología de Información",
                    correo: "hsalazarm@usmp.pe",
                    foto: ""
                },
                {
                    nombre: "IVAN PAREDES REYES",
                    cargo: "Asistente de TI",
                    correo: "iparedesr1@usmp.pe",
                    foto: ""
                },
                {
                    nombre: "KATHERINE LUCERO ANGULO ARCE",
                    cargo: "Auxiliar de Atencion al Usuario",
                    correo: "kanguloa@usmp.pe",
                    foto: ""
                },
                {
                    nombre: "STUDENSKI JACOBSON ROMAN CAMARENA",
                    cargo: "Auxiliar de Atencion al Usuario",
                    correo: "sromanc@usmp.pe",
                    foto: ""
                },
                {
                    nombre: "SIBUS USMP",
                    cargo: "Encargo de atención al usuario",
                    correo: "sibus@usmp.pe",
                    foto: ""
                },
            ];

            (() => {
                const template = document.querySelector(".template-personal").content;
                const fragment = document.createDocumentFragment();
                const cardsPersonal = document.querySelector(".cards-personal");
                personalBibliotecaCentral.forEach(personal => {
                    const clone = template.cloneNode(true);
                    const personalNombre = clone.querySelector(".personal-nombre");
                    const personalCargo = clone.querySelector(".personal-cargo");
                    const personalCorreo = clone.querySelector(".personal-correo");
                    const personalFoto = clone.querySelector(".personal-foto");
                    personalNombre.textContent = personal.nombre;
                    personalCargo.textContent = personal.cargo;
                    personalCorreo.innerHTML += personal.correo;
                    personalFoto.src = personal.foto;
                    fragment.appendChild(clone);
                });
                cardsPersonal.appendChild(fragment);
            })();
            break;
        case "#directorio":
            const directorioBibliotecas = [
                {
                    nombre: "Biblioteca Central",
                    direccion: "Jr. Las Calandrias 151 - 291 Santa Anita",
                    telefono: "(511) 317-2130 Anexo 3191",
                    anexo: "<br>Fax: (511) 317-2130 ó 362-0064 Anexo 3201",
                    personalCargo: "Korelia Alhuay Aliaga",
                    correo: "kalhuaya@usmp.pe"
                },
                {
                    nombre: "Biblioteca de la Facultad de Ciencias de la Comunicación, Turismo y Psicología",
                    direccion: "Av. Tomas Marsano 151 Surquillo",
                    telefono: "513-6300",
                    anexo: "Anexo 2108",
                    personalCargo: "Lorena Denisse Avalos Molleda",
                    correo: "lorena_avalos@usmp.pe"
                },
                {
                    nombre: "Biblioteca de la Facultad de Derecho y Ciencias Políticas",
                    direccion: "Av. La Fontana 1250 La Molina ",
                    telefono: "(511) 3620064",
                    anexo: "Anexo 1134",
                    personalCargo: "Maria del Carmen Zevallos Macciota",
                    correo: "mzevallosm@usmp.pe biblioteca_fia@usmp.edu.pe"
                },
                {
                    nombre: "Biblioteca de la Facultad Medicina Humana",
                    direccion: "Av. Alameda del Corregidor, Cuadra 15 Las Viñas - La Molina",
                    telefono: "(511) 365-2300",
                    anexo: "Anexo: 126",
                    personalCargo: "Manuel Segismundo Urrutia Mellado - Maria Elena Vejarano",
                    correo: "murrutiam@usmp.pe biblioteca_medicina@usmp.pe"
                },
                {
                    nombre: "Biblioteca de la Facultad de Obstetricia y Enfermería",
                    direccion: "Av. Salaverry 1136 - 1144 - Jesús María",
                    telefono: "471-1171",
                    anexo: "Anexo 5109",
                    personalCargo: "Lic. Roxana Vidal de la Cruz",
                    correo: "rvidald@usmp.pe"
                },
                {
                    nombre: "Biblioteca de la Facultad de Odontología",
                    direccion: "Calle Badajoz 264 - San Luis",
                    telefono: "346-4761",
                    anexo: "Anexo 226",
                    personalCargo: "",
                    correo: "biblioteca_odo@usmp.pe"
                },
                {
                    nombre: "Biblioteca Filial Norte Chiclayo",
                    direccion: "Av. Los eucaliptos Nº 300 - 304, Urb. La Pradera - Pimentel",
                    telefono: "(074) 481150",
                    anexo: "",
                    personalCargo: "",
                    correo: "sibus@usmp.pe"
                },
                {
                    nombre: "Biblioteca Filial Sur Arequipa",
                    direccion: "Biblioteca Filial Sur Arequipa",
                    telefono: "(054) 20-4528",
                    anexo: "Anexo 615",
                    personalCargo: "Abelardo David Quispe Ambrocio",
                    correo: "aquispea@usmp.pe"
                },
                {
                    nombre: "Biblioteca Instituto de Arte",
                    direccion: "Jr. Badajoz N° 264. - San Luis.",
                    telefono: "584-5197   346-4295",
                    anexo: "",
                    personalCargo: "",
                    correo: "instituto_arte@usmp.pe"
                },
                {
                    nombre: "Biblioteca de Administración en Posgrado",
                    direccion: "Av. Brasil 1857 - Jesús María",
                    telefono: "4603333",
                    anexo: "",
                    personalCargo: "Coordinador Academico",
                    correo: "sibus@usmp.pe"
                },
                {
                    nombre: "Biblioteca Instituto de Gobierno",
                    direccion: "Calle Martín Dulanto 101, Urb. San Antonio, Miraflores",
                    telefono: "241 4275",
                    anexo: "Anexo 118",
                    personalCargo: "",
                    correo: "iggp@gobiernoygestionpublica.edu.pe"
                }
            ];
            (() => {
                const template = document.querySelector(".template-directorio").content;
                const fragment = document.createDocumentFragment();
                const cardsDirectorio = document.querySelector(".cards-directorio");
                directorioBibliotecas.forEach(directorio => {
                    const clone = template.cloneNode(true);
                    const directorioNombre = clone.querySelector(".directorio-nombre");
                    const directorioDireccion = clone.querySelector(".directorio-direccion");
                    const directorioTelefono = clone.querySelector(".directorio-telefono");
                    const directorioAnexo = clone.querySelector(".directorio-anexo");
                    const directorioPersonalCargo = clone.querySelector(".directorio-personal-cargo");
                    const directorioCorreo = clone.querySelector(".directorio-correo");
                    directorioNombre.textContent = directorio.nombre;
                    directorioDireccion.innerHTML += directorio.direccion;
                    directorioTelefono.textContent = directorio.telefono;
                    directorioAnexo.innerHTML = directorio.anexo;
                    directorioPersonalCargo.textContent = directorio.personalCargo;
                    directorioCorreo.innerHTML += directorio.correo;
                    fragment.appendChild(clone);
                }
                );
                cardsDirectorio.appendChild(fragment);
            })();
            break;
        case "#biblioteca-virtual":
            cargarDataBibliotecas();
            break;
    }
}

export const Router = () => {
    const { host, hash, pathname } = window.location;
    if (hashes.includes(hash)) {
        const path=pathname.replace(".html", "");
        fetch(`components${path}/${routes[hash]}`)
            .then(rs => rs.ok ? rs.text() : Promise.reject(rs))
            .then((html) => Render(html, hash));
    }
};





