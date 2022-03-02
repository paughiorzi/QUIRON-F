import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Nosotros from "./components/Nosotros";
import CartContext from "./context/CartContext";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const arrayDeLink = [
    { id: "1", nombre: "Home", enlace: "/" },
    { id: "2", nombre: "Merch", enlace: "/merch" },
    { id: "3", nombre: "Carrito", enlace: "/cart" },
    /* { id: "4", nombre: "Servicios", enlace: "/servicios" },
    { id: "5", nombre: "Contacto", enlace: "/contacto" }, */
  ];
  return (
    <div className="App">
      <CartContext>
        <BrowserRouter>
          {/* /////////// NAVBAR ////////// */}
          <NavBar arrayDeLink={arrayDeLink} tamaño={"20px"} />
          
          <div className="switch">
          <Switch>
            {/* /////////// HOME ////////// */}
            <Route exact path="/">
              <Nosotros />
            </Route>
            {/* /////////// PRODUCTOS ////////// */}
            <Route exact path="/merch">
              <div className="productosGral">
                <ItemListContainer />
              </div>
            </Route>

            {/* /////////// Producto ////////// */}
            <Route path="/item/:itemId">
              <div className="productoPuntual">
              <ItemDetailContainer />
              </div>
            </Route>
            {/* /////////// Carrito ////////// */}
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
          </div>
          {/* /////////// FOOTER ////////// */}
          <div>
            <Footer />
          </div>
        </BrowserRouter>
      </CartContext>
    </div>
  );
}

export default App;
