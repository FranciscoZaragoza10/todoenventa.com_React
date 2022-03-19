import Item from "../Item/Item";

function ItemList({ prods }) {
  return (
    <>
      {prods.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </>
  );

  // Desarrolla la vista utilizando un array de items y un map
}
export default ItemList;
