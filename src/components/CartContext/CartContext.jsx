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
    } else {
      setcartList([...cartList, item]);
    }
  };
  const vaciarCarrito = () => {
    setcartList([]);
  };
  return (
    <CartContext.Provider value={{ cartList, addToCart, vaciarCarrito }}>
      {children}
    </CartContext.Provider>
  );
}
export default CartContextProvider;
