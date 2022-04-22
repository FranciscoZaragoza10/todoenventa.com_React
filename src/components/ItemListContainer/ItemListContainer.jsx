import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
export const ItemListContainer = ({ saludo }) => {
  const [loading, setloading] = useState(true);
  const [prods, setprods] = useState([]);
  const { id } = useParams();

  // useEffect(() => {
  //   if (id) {
  //     gFetch
  //       .then((resp) => setprods(resp.filter((prod) => prod.categoria === id)))
  //       .catch((err) => console.log(err))
  //       .finally(() => setloading(false));
  //   } else {
  //     gFetch
  //       .then((resp) => setprods(resp))
  //       .catch((err) => console.log(err))
  //       .finally(() => setloading(false));
  //   }
  // }, [id]);

  useEffect(() => {
    if (id) {
      const db = getFirestore();
      const queryCollection = collection(db, "items");
      const queryFilter = query(queryCollection, where("categoria", "==", id));
      getDocs(queryFilter)
        .then((resp) =>
          setprods(
            resp.docs.map((producto) => ({
              id: producto.id,
              ...producto.data(),
            }))
          )
        )

        .finally(() => setloading(false));
    } else {
      const db = getFirestore();
      const queryCollection = collection(db, "items");
      getDocs(queryCollection)
        .then((resp) =>
          setprods(
            resp.docs.map((producto) => ({
              id: producto.id,
              ...producto.data(),
            }))
          )
        )

        .finally(() => setloading(false));
    }
  }, [id]);

  return (
    <>
      <div className="px-3">
        <h1>{saludo}</h1>
        {loading ? <h2>Cargando...</h2> : <ItemList prods={prods} />}
      </div>
    </>
  );
};

export default ItemListContainer;
