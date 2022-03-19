const productos = [
  {
    id: 1,
    nombre: "Jabon Cera",
    precio: 120,
    src: "imgs/index_productos_1.png",
  },
  {
    id: 2,
    nombre: "Playera Tev",
    precio: 110,
    src: "imgs/index_productos_playera.png",
  },
  {
    id: 3,
    nombre: "Pulsera Tev",
    precio: 220,
    src: "imgs/index_productos_pulsera.png",
  },
  {
    id: 4,
    nombre: "Bolsa Tev",
    precio: 119,
    src: "imgs/index_productos_bolsa.png",
  },
  {
    id: 5,
    nombre: "Sombrero Ltc",
    precio: 99,
    src: "imgs/index_productos_sombrero.png",
  },
];
export const gFetch = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  }
});
const producto = {
  id: 2,
  nombre: "Playera Tev",
  precio: 110,
  src: "imgs/index_productos_playera.png",
};

export const getFetchOne = new Promise((resolve, reject) => {
  //acciones
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(producto);
    }, 3000);
  } else {
    reject("400 - not found");
  }
});
