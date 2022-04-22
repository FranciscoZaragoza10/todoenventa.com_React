import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDetailContainer() {
  const [producto, setproducto] = useState([]);
  const { detalleId } = useParams();
  const [loading, setloading] = useState(true);
  // useEffect(() => {
  //   // getFetchOne
  //   if (detalleId) {
  //     gFetch
  //       // .then((res) => setProducto(res.find((prod) => prod.id === detalleId)))
  //       .then((res) => setproducto(res.find((prod) => prod.id === detalleId)))
  //       .catch((err) => console.log(err))
  //       .finally(() => setloading(false));
  //   } else {
  //     gFetch
  //       // .then((res) => setProducto(res.find((prod) => prod.id === detalleId)))
  //       .then((res) => setproducto(res))
  //       .catch((err) => console.log(err))
  //       .finally(() => setloading(false));
  //   }
  // }, [detalleId]);

  useEffect(() => {
    // getFetchOne
    if (detalleId) {
      //   const db = getFirestore();
      //   const queryCollection = collection(db, "items");
      //   const queryFilter = query(queryCollection, where("id", "==", detalleId));
      //   getDocs(queryFilter)
      //     .then((resp) =>
      //       setproducto(
      //         resp.docs.map((producto) => ({
      //           id: producto.id,
      //           ...producto.data(),
      //         }))
      //       )
      //     )
      //     .catch((err) => console.log(err))
      //     .finally(() => setloading(false));
      // } else {
      const db = getFirestore();
      const queryDoc = doc(db, "items", detalleId);

      //   getDocs(queryFilter)
      getDoc(queryDoc)
        .then((resp) => setproducto({ id: resp.id, ...resp.data() }))

        .finally(() => setloading(false));
    }
  }, [detalleId]);
  return (
    <>{loading ? <h2>Cargando...</h2> : <ItemDetail producto={producto} />}</>
  );
}
export default ItemDetailContainer;
