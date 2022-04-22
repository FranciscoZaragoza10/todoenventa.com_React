import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import "./css/style.css";
import "./App.css";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/CartContext/CartContext";
import { getFirestoreApp } from "./firebase/config";
import Footer from "./components/Footer/Footer";
getFirestoreApp();
function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <CartContextProvider>
          <div className="App">
            <NavBar />

            <Routes>
              <Route
                path="/"
                element={
                  <ItemListContainer
                    saludo={"Encuentra, compra y disfruta tu producto"}
                  />
                }
              />
              <Route
                path="/categoria/:id"
                element={
                  <ItemListContainer
                    saludo={"Encuentra, compra y disfruta tu producto"}
                  />
                }
              />
              <Route
                path="/detalle/:detalleId"
                element={<ItemDetailContainer />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </CartContextProvider>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
