import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);
  const [Items, setItems] = useState(0);

  useEffect(() => {});
  const handleCount = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("Solo hay disponibles: " + stock);
    }
  };
  const reduceCount = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };
  const agregar = () => {
    setItems(count);
    onAdd(count);
  };

  return (
    <>
      {Items === 0 ? (
        <div className="d-flex col-5 mx-auto flex-wrap justify-content-between shadow-lg">
          <h4 className="text-primary fs-3 btn py-0" onClick={reduceCount}>
            -
          </h4>
          <h2 className="text-primary fs-3 btn py-0">{count}</h2>
          <h4 className="text-primary fs-3 btn py-0" onClick={handleCount}>
            +
          </h4>
          <button className="btn btn-primary" onClick={agregar}>
            Agregar
          </button>
        </div>
      ) : (
        <Link to="/cart">
          {" "}
          <button className="btn btn-primary">Terminar Compra</button>
        </Link>
      )}
    </>
  );
}
export default ItemCount;
