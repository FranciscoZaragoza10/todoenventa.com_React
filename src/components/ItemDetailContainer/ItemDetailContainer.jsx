import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { getFetchOne, gFetch } from "../../helpers/gFetch";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [producto, setProducto] = useState([]);
  const { detalleId } = useParams;
  useEffect(() => {
    // getFetchOne
    getFetchOne
      // .then((res) => setProducto(res.find((prod) => prod.id === detalleId)))
      .then((res) => setProducto(res))
      .catch((err) => console.log(err));
  }, [detalleId]);

  return <ItemDetail producto={producto} />;
}
export default ItemDetailContainer;
