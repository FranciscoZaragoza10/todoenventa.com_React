import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { getFetchOne } from "../../helpers/gFetch";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [producto, setProducto] = useState([]);
  const { detalleId } = useParams;
  const [loading, setloading] = useState(true);
  useEffect(() => {
    // getFetchOne
    getFetchOne
      // .then((res) => setProducto(res.find((prod) => prod.id === detalleId)))
      .then((res) => setProducto(res))
      .catch((err) => console.log(err))
      .finally(() => setloading(false));
  }, [detalleId]);

  return (
    <>{loading ? <h2>Cargando...</h2> : <ItemDetail producto={producto} />}</>
  );
}
export default ItemDetailContainer;
