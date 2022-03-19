import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
          <div className="p-3 bg-image container-fluid col-sm-3 col-6 logo">
            <NavLink to="/">
              {" "}
              <p className="logo__link"></p>{" "}
            </NavLink>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav mx-auto align-items-center">
              <NavLink to="/">
                <li className="nav-item">
                  <p className="nav-link text-primary">Inicio</p>
                </li>
              </NavLink>
              <NavLink to="/categoria/ropa">
                <li className="nav-item">
                  <p className="nav-link text-primary">Ropa</p>
                </li>
              </NavLink>
              <NavLink to="/categoria/accesorios">
                <li className="nav-item">
                  <p className="nav-link text-primary">Accesorios</p>
                </li>
              </NavLink>
              {/* <li className="nav-item">
                <a className="nav-link text-primary" href="productos.html">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary" href="nosotros.html">
                  Nosotros
                </a>
              </li> */}
              <li className="nav-item">
                <p className="nav-link text-primary">FAQ</p>
              </li>
              <li className="nav-item">
                <p className="nav-link text-primary">Contactanos</p>
              </li>
            </ul>
            <form className="d-flex" id="buscar">
              <input
                className="form-control me-2 buscar buscando"
                type="text"
                placeholder="Buscar"
              />
              <button className="btn btn-primary" type="submit">
                Buscar
              </button>
            </form>
          </div>
          <NavLink to="/cart">
            <CartWidget />
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
