//fetch para abogados
const getAbogados = async () => {
    const resp = await fetch('js/datos.json')
    const data = await resp.json()

    /* Spread and Filter */               
    let filtro = data.filter (persona => persona.penalista === "si")

    let informa= [
        ...filtro
    ]

    for (const abogado of informa) {
        let contenedor = document.createElement("ul");
        contenedor.innerHTML = `<li> ${abogado.nombre}</li>
                                `;
        document.getElementById("info").appendChild(contenedor);
    }

    /*  caracteristacas*/               
    for (const abogado of data) {
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<p> <b> ${abogado.nombre}</b><br>
                                <img src='images/${abogado.imagen}' width='200'><br>
                                <b> MP: ${abogado.matricula}</b></p>
                                <p>  ${abogado.info}<p>
                                <hr>`;
        document.getElementById("nosotros").appendChild(contenedor);
}
}
getAbogados()
//fetch para servicios

 

const getServicios = async () => {
    const resp = await fetch('js/servicios.json')
    const data = await resp.json()
    let info = document.getElementById("servicios");
 
    
    for (let servicios of data) {
        var elemento = document.createElement("li");
        elemento.innerHTML = servicios.servicio;
        info.append(elemento);
    } 
    
}
getServicios()

//funcion para validar formulario
let boton = document.getElementById("btnPrincipal");
boton.onclick = () => {
    validar();
    
 }


function validar(){
    let consult = document.getElementById("consult").value;
    let telefono = document.getElementById("telefono").value;
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;

    (consult == "" || telefono == "" ||nombre == "" ||email == "" )  ? 
    swal({
        title: "Error",
        text: "Complete los campos!",
        icon: "error",
        button: "ok!",
      })
    :
    swal({
        title: "Enviado",
        text: "Gracias por comunicarte!",
        icon: "success",
        button: "ok!",
      });
    
    
 }

// obtiene los datos del DOM y los guarda en un array
let miFormulario = document.getElementById("form");
miFormulario.addEventListener("submit", validarFormulario);


let datos= []
function validarFormulario(e) {
    e.preventDefault();
    let formulario = e.target;
    let consulta = formulario.consult.value
    let numero= formulario.telefono.value
    let nombre= formulario.nombre.value
    let email= formulario.email.value

    datos.push(consulta, email, numero, nombre)
    console.log (datos)
    
// guardar datos en localStorege formato JSON
    localStorage.setItem("dato", JSON.stringify(datos))
// carga de datos local storage y usos de los datos en el dom
    let carga = JSON.parse(localStorage.getItem("dato"));
    console.log (carga)

    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<p style="text-align:center" class="bg-secondary" > Gracias  ${carga[3]} por confiar en nosotros</p>`
    document.getElementById("nombrex").appendChild(contenedor); 
} 

