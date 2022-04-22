const Footer = () => {
  return (
    <div class="position-relative h-100">
      <footer class="text-center text-lg-start text-white bottom-0 w-100">
        {/* <!-- Section: Social media --> */}
        <section class="d-flex justify-content-center justify-content-lg-between p-2 border-bottom">
          {/* <!-- Left --> */}
          <div class="me-5 d-none d-lg-block fs-4">
            <span>Siguenos en nuestras redes:</span>
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
          <div>
            <a href="https://www.facebook.com/" class="me-4 text-reset">
              <i class="fab fa-facebook-f fs-2 icon"></i>
            </a>

            <a href="https://twitter.com/?lang=es" class="me-4 text-reset">
              <i class="fab fa-twitter fs-2"></i>
            </a>
            <a href="https://www.instagram.com/" class="me-4 text-reset">
              <i class="fab fa-instagram fs-2"></i>
            </a>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section class="">
          <div class="container text-center text-md-start mt-1">
            {/* <!-- Grid row --> */}
            <div class="row mt-3">
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2">
                {/* <!-- Content --> */}
                <h6 class="text-uppercase fw-bold mb-4 fs-3">Todo en Venta</h6>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-1">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-2">Navega</h6>
                <p>
                  <a href="productos.html" class="text-reset mb-0">
                    Productos
                  </a>
                </p>
                <p>
                  <a href="nosotros.html" class="text-reset">
                    Nosotros
                  </a>
                </p>
                <p>
                  <a href="faq.html" class="text-reset">
                    FAQ
                  </a>
                </p>
                <p>
                  <a href="contactanos.html" class="text-reset">
                    Contactanos
                  </a>
                </p>
              </div>
              {/* <!-- Grid column -->

          <!-- Grid column --> */}
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-2">Contacto</h6>
                <p>
                  <i class="fas fa-home me-3"></i> Juarez 25 / Centro / Toluca /
                  CP: 50000 / Estado de México / México
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  info@tev.com
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i> +52 55 2909 7337
                </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}
      </footer>
    </div>
  );
};

export default Footer;
