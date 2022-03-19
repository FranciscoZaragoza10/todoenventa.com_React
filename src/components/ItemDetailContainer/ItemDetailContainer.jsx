import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { getFetchOne } from "../../helpers/gFetch";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
  const { detalleId } = useParams;
  useEffect(() => {
    getFetchOne

      .then((prod) => setProducto(prod))
      .catch((err) => console.log(err));
  }, []);

  return <ItemDetail producto={producto} />;
}
export default ItemDetailContainer;
