import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { gFetch } from "../../helpers/gFetch";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [producto, setproducto] = useState([]);
  const { detalleId } = useParams();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    // getFetchOne
    if (detalleId) {
      gFetch
        // .then((res) => setProducto(res.find((prod) => prod.id === detalleId)))
        .then((res) => setproducto(res.find((prod) => prod.id === detalleId)))
        .catch((err) => console.log(err))
        .finally(() => setloading(false));
    } else {
      gFetch
        // .then((res) => setProducto(res.find((prod) => prod.id === detalleId)))
        .then((res) => setproducto(res))
        .catch((err) => console.log(err))
        .finally(() => setloading(false));
    }
  }, [detalleId]);

  return (
    <>{loading ? <h2>Cargando...</h2> : <ItemDetail producto={producto} />}</>
  );
}
export default ItemDetailContainer;
