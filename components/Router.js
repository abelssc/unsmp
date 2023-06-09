const routes = {
    "#informacion-general": "informacion-general.html",
    "#historia":"historia.html",
    "#nuestra-coleccion":"nuestra-coleccion.html",
};
const hashes = Object.keys(routes);
const Render=($contenido)=>{
    document.getElementById("root").innerHTML = $contenido; 
};

export const Router=()=> {
    const { host,hash,pathname } = window.location;
    if(hashes.includes(hash)){
        fetch(`components/${routes[hash]}`)
        .then(rs=>rs.ok?rs.text():Promise.reject(rs))
        .then((html) => Render(html));
    }
};





