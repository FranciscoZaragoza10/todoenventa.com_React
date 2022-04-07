import { createContext, useContext, useState } from "react";
import Item from "../Item/Item";

export const CartContext = createContext([]);
// const [cart, setcart] = useState([])
//     return
//     (
export const useCartContext = () => useContext(CartContext);

//     )
// }
function CartContextProvider({ children }) {
  const [cartList, setcartList] = useState([]);

  const addToCart = (item) => {
    const isInCart = cartList.find((cart) => cart.id === item.id);

    if (isInCart) {
      setcartList([...cartList]);
      // //   setamount(cartList.reduce((item) => item.precio));
    } else {
      setcartList([...cartList, item]);
      //   setamount(cartList.reduce((item) => item.precio));
    }
  };
  const vaciarCarrito = () => {
    setcartList([]);
  };
  const eliminarItem = (prod) => {
    const newCartList = cartList.filter((i) => i.id !== prod.id);
    setcartList([newCartList]);
    // setprods(resp.filter((prod) => prod.categoria === id)
  };

  const amount = () => {
    cartList.length();
  };
  return (
    <CartContext.Provider
      value={{ cartList, addToCart, vaciarCarrito, eliminarItem, amount }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContextProvider;
