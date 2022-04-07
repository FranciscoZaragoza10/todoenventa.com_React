import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext/CartContext";

function Cart() {
  const { cartList, vaciarCarrito, eliminarItem, precioTotal } =
    useCartContext();
  function generarOrden(e) {
    e.preventDefault();
    let orden = {};
    orden.buyer = {
      name: "fede",
      phone: "5555667722",
      email: "test@todoenventa.com",
    };
    orden.precio = precioTotal();
    orden.fecha = "7 Abril";
    orden.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const nombre = cartItem.nombre;
      const precio = cartItem.precio;
      return { id, nombre, precio };
    });
    const db = getFirestore();
    const queryCollection = collection(db, "orders");
    addDoc(queryCollection, orden).then(({ id }) =>
      alert("Tu orden fue recibida con identificador:" + id)
    );
  }
  return (
    <div>
      {cartList.map((prod) => (
        <div key={prod.id} className="d-flex flex-wrap justify-content-center">
          <div className="d-flex flex-wrap-column col-lg-6 col-md-7 col-7 shadow-lg align-items-center my-2 mx-5 carrito_prod">
            <img className="rounded img__carrito" src={prod.src} alt="bolsa" />
            <h3 className="text-primary fs-5 mx-2 my-0 text-center w-25">
              {prod.nombre}
            </h3>
            <h4 className="fw-bold shadow-sm bg-white rounded mx-5">
              <i className="fas fa-shopping-bag text-primary"></i> $
              {prod.precio}
            </h4>
            <h4 className="fw-bold shadow-sm bg-white rounded mx-5">
              cantidad: {prod.items}
            </h4>
            <button onClick={() => eliminarItem(prod.id)}>Eliminar Item</button>
          </div>
        </div>
      ))}
      {cartList.length > 0 ? (
        <>
          {" "}
          <h2>
            El monto a pagar es: $
            {cartList.reduce(
              (total, prod) => prod.precio * prod.items + total,
              0
            )}
          </h2>
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>{" "}
          <button onClick={generarOrden}>Generar Orden</button>{" "}
        </>
      ) : (
        <Link to="/">
          {" "}
          <h2 className="my-5 text-primary">
            {" "}
            Regresa a ver nuestros productos para agregar a tu carrito
          </h2>
        </Link>
      )}
    </div>
  );
}
export default Cart;
