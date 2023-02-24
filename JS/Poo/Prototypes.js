//Object Constructor

function Producto(nombre,precio,Disponible){
    this.nombre=nombre;
    this.precio=precio;
    this.Disponible=Disponible;

   }

   //   Crear funciones  que solo se utilizen en un objeto en especifico
   Producto.prototype.formatoProducto=function(){
    return `El Producto ${this.nombre} tiene un precio: ${this.precio}`
}
  
   function Cliente(nombre , edad){
     this.nombre=nombre;
     this.edad=edad;
   }
    //   Crear funciones  que solo se utilizen en un objeto en especifico
    Cliente.prototype.formatoCliente= function(){
        return `El Cliente ${this.nombre} tiene una Edad: ${this.edad}`
    }
    
   console.log(Producto.formatoProducto());
   console.log(Cliente.formatoCliente());