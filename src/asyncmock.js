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
    { id: 10, nombre: "pulpo", valor: 8500, img: "./img/prod_pulpitos.JPG"}

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
        }, 2000)
        
    })
}