export class Producto {
    constructor(
        parametroCodigo,
        parametroProducto,
        parametroDescription,
        parametroCantidad,
        parametroURL) {
            this.codigo = parametroCodigo;
            this.Prodcuto = parametroProducto;
            this.Description = parametroDescription;
            this.Cantidad = parametroCantidad;
            this.Url = parametroURL;
    }

    //getters y setters
    get msotrarCodigo(){
        return this.codigo
    }
    get mostrarProducto(){
        return this.Prodcuto
    }
    get msotrarDescription(){
        return this.description
    }
    get mostrarCantidad(){
        return this.Cantidad
    }
    get mostrarUrl(){
        return this.Url
    }

    set modificarCodigo(nuevoCodigo){
        this.codigo = nuevoCodigo
    }

    set modificarProducto (nuevoProducto){
        this.Prodcuto = nuevoProducto
    }

    set modificarDescription (nuevoDescription){
        this.Description = nuevoDescription
    }

    set modificarCantidad (nuevoCantidad){
        this.Cantidad = nuevoCantidad
    }

    set modificarURL (nuevoURL) {
        this.Url = nuevoURL
    }
}