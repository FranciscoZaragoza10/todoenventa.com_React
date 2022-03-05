import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
          <div className="p-3 bg-image container-fluid col-sm-3 col-6 logo">
            <a className="logo__link" href="index.html"></a>
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
              <li className="nav-item">
                <a className="nav-link text-primary" href="index.html">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary" href="productos.html">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary" href="nosotros.html">
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary" href="faq.html">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary" href="contactanos.html">
                  Contactanos
                </a>
              </li>
            </ul>
            <form className="d-flex" id="buscar">
              <input
                className="form-control me-2 buscar buscando"
                type="text"
                placeholder="Buscar"
              />
              <button class="btn btn-primary" type="submit">
                Buscar
              </button>
            </form>
          </div>
          <CartWidget />
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
