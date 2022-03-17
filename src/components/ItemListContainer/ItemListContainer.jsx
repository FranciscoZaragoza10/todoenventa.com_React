import { useEffect, useState } from "react";
import { gFetch } from "../../helpers/gFetch";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ saludo }) => {
  const [bool, setbool] = useState(true);
  const [loading, setloading] = useState(true);
  const [prods, setprods] = useState([]);
  useEffect(() => {
    gFetch
      .then((resp) => setprods(resp))
      .catch((err) => console.log(err))
      .finally((loading) => setloading(false));
  }, []);

  return (
    <>
      <div className="px-3">
        <h1>{saludo}</h1>
        {loading ? (
          <h2>Cargando...</h2>
        ) : (
          prods.map((prod) => (
            <div key={prod.id}>
              <div className="d-flex flex-wrap-column col-lg-6 col-md-7 col-7 shadow-lg align-items-center my-2 mx-5 carrito_prod">
                <img
                  className="rounded img__carrito"
                  src={prod.src}
                  alt="bolsa"
                />
                <h3 className="text-primary fs-5 mx-2 my-0 text-center w-25">
                  {prod.nombre}
                </h3>
                <h4 className="fw-bold shadow-sm bg-white rounded mx-5">
                  <i className="fas fa-shopping-bag text-primary"></i> $
                  {prod.precio}
                </h4>
              </div>
            </div>
          ))
        )}
      </div>
      <ItemCount stock={5} initial={1} />
    </>
  );
};
export default ItemListContainer;
