const misProductos =[
    { id: "1", nombre: "amongus", valor: 5000, img: "../img/prod_amongus.JPG",idCat:"3"},
    { id: "2", nombre: "babyyoda", valor: 7000, img: "../img/prod_babyyoda.JPG",idCat:"3"},
    { id: "3", nombre: "cartera", valor: 9500, img: "../img/prod_carterita.JPG",idCat:"2"},
    { id: "4", nombre: "charmander", valor: 8990, img: "../img/prod_charmander.JPG",idCat:"3"},
    { id: "5", nombre: "kirby", valor: 7500, img: "../img/prod_kirby.JPG",idCat:"3"},
    { id: "6", nombre: "merida", valor: 19000, img: "../img/prod_merida.JPG",idCat:"3"},
    { id: "7", nombre: "mickey", valor: 5500, img: "../img/prod_mickey.JPG",idCat:"3"},
    { id: "8", nombre: "nube", valor: 4000, img: "../img/prod_nube.JPG",idCat:"3"},
    { id: "9", nombre: "pokebola", valor: 4500, img: "../img/prod_pokebolas.JPG",idCat:"3"},
    { id: "10", nombre: "pulpo", valor: 8500, img: "../img/prod_pulpitos.JPG",idCat:"3"},
    { id: "11", nombre: "Gorro 1", valor: 7500, img: "../img/prod_gorro1.jpg",idCat:"1"},
    { id: "12", nombre: "Gorro 2", valor: 7500, img: "../img/prod_gorro2.jpg",idCat:"1"},
    { id: "13", nombre: "Punta 1", valor: 12000, img: "../img/prod_chal1.jpg",idCat:"1"},
    { id: "14", nombre: "Punta 2", valor: 14000, img: "../img/prod_chal2.jpg",idCat:"1"},
    { id: "15", nombre: "Collar", valor: 6000, img: "../img/prod_collar1.jpg",idCat:"2"},
    { id: "16", nombre: "Cartera 2", valor: 12500, img: "../img/prod_carterita2.jpg",idCat:"2"}

]

export const getProductos = () => {
    return new Promise((res)=> {
        setTimeout( () => {
            res(misProductos)
        }, 1000)
    })
}
export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);
        }, 500)
        
    })
}
export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);

        }, 500)

    })
}