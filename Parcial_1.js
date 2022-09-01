function Indumentaria (id,stock,nombre,precio) {
    this.id = id;
    this.stock = stock;
    this.nombre = nombre;
    this.precio = precio;
}


function Camisa(id,stock,nombre,precio){
    Indumentaria.call(this,id,stock,nombre,precio);
}
function Pantalon(id,stock,nombre,precio){
    Indumentaria.call(this,id,stock,nombre,precio);
}
function Zapatos(id,stock,nombre,precio){
    Indumentaria.call(this,id,stock,nombre,precio);
}
Camisa.prototype = Object.create(Indumentaria.prototype);
Camisa.prototype.constructor = Camisa;
Pantalon.prototype = Object.create(Indumentaria.prototype);
Pantalon.prototype.constructor = Pantalon;
Zapatos.prototype = Object.create(Indumentaria.prototype);
Zapatos.prototype.constructor = Zapatos;

const Tienda_Virtual = () => {
    const inventario = () => {
        const camisa = new Camisa(1,2,"Camisa",10);
        const pantalon = new Pantalon(2,2,"Pantalon",15);
        const zapatos = new Zapatos(3,2,"Zapatos",30);
    }
    const carritoDeCompras = [];
    const agregarProducto = (producto) => {
            if(producto.stock > 0){
                carritoDeCompras.push(producto);
                prompt("El producto ha sido agregado correctamente al carrito");
            }
            else{
                prompt("Lo sentimos, ya no tenemos existencias de ese producto");
            }
    }
    const realizarPago = () => {
        actualizar_inventario();
        let total = 0;
        carritoDeCompras.forEach(P => {
            total += P.precio;
        });
        prompt(`El total de su compra es: ${total}, Gracias por su compra`);
    }
    const actualizar_inventario = () => {
        inventario.forEach(p => {
            prompt("Inventario actualizado");
        });
    }
}