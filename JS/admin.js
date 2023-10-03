import { campoRequerido, validarNumeros, validarURL, validarGeneral } from "./validaciones.js";

import { Producto } from "./productoClass.js";

//traigo los elementos que necesito del html
let campoCodigo = document.getElementById("codigo")
// console.log(campoCodigo);
let campoProducto = document.getElementById("producto");
let campoDescription = document.getElementById("description");
let campoCantidad = document.getElementById("cantidad");
let campoURL = document.getElementById("URL");

let formProductos = document.querySelector("#formProductos");

let productoExistente = false //variable bandera: si prodoctoExistente es false quiero crear,
// si es true quiero modificar el producto existente

let listaProductos = [];

//Asociar un evento a cada elemento

campoCodigo.addEventListener("blur",() =>{
    // console.log("desde codigo");
    campoRequerido(campoCodigo)
})

campoProducto.addEventListener("blur",() =>{
    // console.log("desde producto");
    campoRequerido(campoProducto)
})

campoDescription.addEventListener("blur",() =>{
    // console.log("desde descripcion");
    campoRequerido(campoDescription)
})

campoCantidad.addEventListener("blur",() =>{
    // console.log("desde cantidad");
    validarNumeros(campoCantidad)
})

campoURL.addEventListener("blur",() =>{
    // console.log("desde URL");
    validarURL(campoURL);
})

formProductos.addEventListener("submit", guardarProducto)



//EMPIEZA LA LOGICA DEL CRUD

function guardarProducto(e){
    //sirve para prevenir la actualizacion de la pagina, la "e" es de "event"
    e.preventDefault();

    //verificar que todos los datos sean validos
    if (validarGeneral(campoCodigo, campoProducto, campoDescription, campoCantidad, campoURL)) {
        // console.log("los datos son correctos, listos para enviar");
    if(!productoExistente){
        //crear Producto
        crearProducto();
    } else {
        //modificar Producto
        modificarProducto();
    }
    }
}
function crearProducto() {
    //crear un objeto producto
    // let productoNuevo = new Producto(campoCodigo.value, campoProducto.value, campoDescription.value, campoCantidad.value, campoURL.value);
    // console.log(productoNuevo);
    console.log(campoCodigo.value, campoProducto.value, campoDescription.value, campoCantidad.value, campoURL.value);
    // //guardar cada objeto(producto) en una array de prodcutos
    // listaProductos.push(productoNuevo);
    // console.log(listaProductos);
    // //limpiar formulario
    // limpiarFormulario()

}

function limpiarFormulario(){
    //limpiamos los value del formulario
    formProductos.reset();
    //resetear las clases de los input
    campoCodigo.className = "form-control"
    campoProducto.className = "form-control"
    campoDescription.className = "form-control"
    campoCantidad.className = "form-control"
    campoURL.className = "form-control"
    //resetear la variable bandera o booleana para el caso de modificar producto
    productoExistente = false;
}
