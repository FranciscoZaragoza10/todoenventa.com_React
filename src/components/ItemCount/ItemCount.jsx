import { useState, useEffect } from "react";

function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(initial);
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
  const onAdd = () => {
    console.log("Agregaste " + count + " items");
  };
  return (
    <>
      <h3>Item</h3>
      <div className="d-flex col-3 mx-auto flex-wrap justify-content-between shadow-lg">
        <h4 className="text-primary fs-3" onClick={reduceCount}>
          -
        </h4>
        <label className="text-primary fs-3">{count}</label>
        <h4 className="text-primary fs-3" onClick={handleCount}>
          +
        </h4>
        <button className="btn btn-primary" onClick={onAdd}>
          Agregar
        </button>
      </div>
    </>
  );
}
export default ItemCount;
