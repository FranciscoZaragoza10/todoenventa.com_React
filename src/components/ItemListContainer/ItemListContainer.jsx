import { useEffect, useState } from "react";
import { gFetch } from "../../helpers/gFetch";

import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

export const ItemListContainer = ({ saludo }) => {
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
        {loading ? <h2>Cargando...</h2> : <ItemList prods={prods} />}
      </div>
      <ItemCount stock={5} initial={1} />
    </>
  );
};

export default ItemListContainer;
