// Validaciones

export const campoRequerido = (input) => {
    console.log("desde campo requerido");
    console.log(input.value);
    if (input.value.trim().length > 0) {
        console.log("aqui esta todo bien");
        input.className= "form-control is-valid"
        return true;
    } else {
        console.log("aqui muestro el error");
        input.className= "form-control is-invalid"
        return false;
    }
};

const validarNumeros = (input) => {
    //vamos a usar o crear una expresion regular
    let patron = /^[0-9]{1,5}$/
    //el metodo test permite comparar un string con el patron y devuelve true o false
    //regex.test("string a validar")
    if (patron.test(input.value)) {
        //cumple con la expresion regular
        input.className= "form-control is-valid"
        return true;
    } else {
        input.className= "form-control is-invalid"
        return false;
    }
};

const validarURL = (input) => {
    let patron = /^(ftp|http|https):\/\/[^ "]+$/;
    if (patron.test(input.value)) {
        input.className= "form-control is-valid"
        return true;
    } else {
        input.className= "form-control is-invalid"
        return false;
    }
};

const validarGeneral = (campoCodigo, campoProducto, campoDescription, campoCantidad, campoURL
    ) => {
        let alerta = document.querySelector("#formProductos")
    //comprobar que pasen cada una de las validaciones y si no pasan mostrar el alert
    if(campoRequerido(campoCodigo) && 
    campoRequerido(campoProducto) && 
    campoRequerido(campoDescription) && 
    campoRequerido(campoCantidad) && 
    campoRequerido(campoURL))
    {
        console.log("validacion correcta, todos los datos estan listos para ser enviados");
        alerta.className = "alert alert-danger my-3 d-none"
        return true;
    } else{
        console.log("validacion incorrecta, datos erroneos");
        alerta.className = "alert alert-danger my-3"
        return false
    }

};
//pueden usar export general como el siguiente o anteponer  la palabra export en cada deficion de funcion a exportar
export {
    validarNumeros, 
    validarURL, 
    validarGeneral }