function Item({ prod }) {
  return (
    <div key={prod.id}>
      <div className="d-flex flex-wrap-column col-lg-6 col-md-7 col-7 shadow-lg align-items-center my-2 mx-5 carrito_prod">
        <img className="rounded img__carrito" src={prod.src} alt="bolsa" />
        <h3 className="text-primary fs-5 mx-2 my-0 text-center w-25">
          {prod.nombre}
        </h3>
        <h4 className="fw-bold shadow-sm bg-white rounded mx-5">
          <i className="fas fa-shopping-bag text-primary"></i> ${prod.precio}
        </h4>
      </div>
    </div>

    // Desarrolla la vista de un ítem donde item es de tipo
    // { id, title, price, pictureUrl }
  );
}
export default Item;
