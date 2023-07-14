const misProductos =[
    { id: 1, nombre: "amongus", valor: 5000, img: "./img/prod_amongus.JPG"},
    { id: 2, nombre: "babyyoda", valor: 7000, img: "./img/prod_babyyoda.JPG"},
    { id: 3, nombre: "cartera", valor: 9500, img: "./img/prod_carterita.JPG"},
    { id: 4, nombre: "charmander", valor: 8990, img: "./img/prod_charmander.JPG"},
    { id: 5, nombre: "kirby", valor: 7500, img: "./img/prod_kirby.JPG"},
    { id: 6, nombre: "merida", valor: 19000, img: "./img/prod_merida.JPG"},
    { id: 7, nombre: "mickey", valor: 5500, img: "./img/prod_mickey.JPG"},
    { id: 8, nombre: "nube", valor: 4000, img: "./img/prod_nube.JPG" },
    { id: 9, nombre: "pokebola", valor: 4500, img: "./img/prod_pokebolas.JPG" },
    { id: 10, nombre: "pulpo", valor: 8500, img: "./img/prod_pulpitos.JPG"},
    { id: 11, nombre: "Gorro 1", valor: 7500, img: "./img/prod_gorro1.jpg"},
    { id: 12, nombre: "Gorro 2", valor: 7500, img: "./img/prod_gorro2.jpg"},
    { id: 13, nombre: "Punta 1", valor: 12000, img: "./img/prod_chal1.jpg"},
    { id: 14, nombre: "Punta 2", valor: 14000, img: "./img/prod_chal2.jpg"},
    { id: 15, nombre: "Collar", valor: 6000, img: "./img/prod_collar1.jpg"},
    { id: 16, nombre: "Cartera 2", valor: 12500, img: "./img/prod_carterita2.jpg"}

]

export const getProductos = () => {
    return new Promise((res)=> {
        setTimeout( () => {
            res(misProductos)
        }, 2000)
    })
}
export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);
        }, 4000)
        
    })
}