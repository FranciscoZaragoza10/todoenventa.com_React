import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ saludo }) => {
  return (
    <>
      <div className="px-3">
        <h1>{saludo}</h1>
      </div>
      <ItemCount stock={5} initial={1} />
    </>
  );
};
export default ItemListContainer;
