class ProductManager {
    products;
    static ultimoId = 0;
    constructor(){
        this.products = [];
    }
    getproducts(){
        return this.products;
    }
   addProduct (title,description,price,thumbnail,code, stock){
    ProductManager.ultimoId ++;
    //Valida que todos los campos estén completos
    if (!title || !description || !price || !thumbnail || !code || !stock) {
        throw new Error ('Error: Todos los campos son obligatorios!'); 
    }
    //Comprueba si el codigo ya existe
    const codeExist = this.products.some(product => product.code === code);
    if (codeExist){
        throw new Error("El código del producto ya existe");
    }
    //Agrega los elementos al carrito
    const evento = {
        id:ProductManager.ultimoId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
    };
    this.products.push(evento);

}
    //Función para verificar si el ID ya existe. 
    getProductById (id){
        const getID = this.products.find(product => product.id === id);
        if (getID) {
            return this.products;
        } else { 
            throw new Error ("ID Not Found");
        }
    }
}

const manager = new ProductManager();

manager.addProduct("Remera Oversize ", "Remera 100% algodon fino", 10000, "imagenA1","A1",10);
//manager.addProduct("Remera Larga", "Remera 100% algodon fino", 5000, "imagenA2","A1",10); ESTE PRODUCTO DEVUELVE EL CÓDIGO DEL PRODUCTO YA EXISTE.
//manager.addProduct("Campera Black", "Campera de frisa con interior de corderito.", 25000, "imagenA2","A2",10); ESTE PRODUCTO ES AGREGADO AL ARRAY PRODUCTS.
//manager.addProduct("Campera de frisa con interior de corderito.", 25000); ESTE PRODUCTO DEVUELVE QUE TODOS LOS CAMPOS SON OBLIGATORIOS.
//manager.getProductById(4); ESTA FUNCIÓN CON ESTE ID DEVUELVE ID NOT FOUND.

console.log (manager);

