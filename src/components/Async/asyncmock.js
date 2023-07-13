const misProductos = [
  { id: "1", nombre: "Aceite Esencial", precio: 15000, img: "../img/aceites.png", idCat: "2", desc: "Un increible producto" },
  { id: "2", nombre: "Primer", precio: 18000, img: "../img/primer.png", idCat: "2", desc: "Un increible producto" },
  { id: "3", nombre: "Sombras", precio: 20000, img: "../img/makeup.png", idCat: "1", desc: "Un increible producto" },
  { id: "4", nombre: "Pack de cosméticos", precio: 9000, img: "../img/cpiel.png", idCat: "1", desc: "Un increible producto" },
]

export const getProductos = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(misProductos)
    }, 100)
  })
}

//Creamos una nueva función similar a la anterior pero que nos retorne un solo item: 

export const getUnProducto = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const producto = misProductos.find(prod => prod.id === id);
      resolve(producto);
    }, 100)
  })
}

//Creamos una nueva función que retorna toda la categoría:

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
      resolve(productosCategoria);
    }, 100)
  })
}

