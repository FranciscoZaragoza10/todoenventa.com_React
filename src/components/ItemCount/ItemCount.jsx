import { useState, useEffect } from "react";

function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(Number(initial));
  useEffect(() => {});
  const handleCount = () => {
    setCount(count + 1);
  };
  const reduceCount = () => {
    setCount(count - 1);
  };
  const onAdd = () => {
    console.log("Agregaste " + count + " items");
  };
  return (
    <>
      <h3>Item</h3>
      <div>
        <label>{count}</label>
        <h4 onClick={handleCount}>+</h4>
        <h4 onClick={reduceCount}>-</h4>
        <button onClick={onAdd}>Agregar</button>
      </div>
    </>
  );
}
export default ItemCount;
