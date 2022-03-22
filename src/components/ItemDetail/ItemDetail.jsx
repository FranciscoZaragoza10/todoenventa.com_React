import ItemCount from "../ItemCount/ItemCount";

const onAdd = (Items) => {
  console.log("Usted agrego " + Items + " items");
};
function ItemDetail({ producto }) {
  return (
    <>
      <div
        key={producto.id}
        className="d-flex flex-wrap justify-content-center"
      >
        <div className="d-flex flex-wrap col-lg-6 col-md-7 col-7 shadow-lg justify-content-center my-2 mx-5 carrito_detail">
          <img
            className="rounded img__detalle__producto"
            src={producto.src}
            alt={producto.nombre}
          />
          <h3 className="text-primary fs-5 mx-2 my-0 text-center w-100">
            {producto.nombre}
          </h3>
          <h4 className="fw-bold shadow-sm bg-white rounded mx-5">
            <i className="fas fa-shopping-bag text-primary"></i> $
            {producto.precio}
          </h4>
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
          <h2 className="text-primary">{producto.dtl}</h2>
        </div>
      </div>
    </>
  );
}
export default ItemDetail;
// function ItemDetail({producto}) {
//     return (
//       <div >
//         <center>
//             <img src={producto.foto} alt = 'imagen' />
//             <p className='alert alert-primary w-25'>{producto.name}</p>
//             <p className='alert alert-primary w-25'>{producto.price}</p>
//             <p className='alert alert-primary w-25'>{producto.categoria}</p>
//         </center>
//       </div>
//     )
//   }
