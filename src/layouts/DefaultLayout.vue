<template>
  <div class="layout">
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top d-flex align-items-center ">
      <div class="container-fluid">
        <div class="row justify-content-center align-items-center">
          <div
            class="col-xl-11 d-flex align-items-center justify-content-between"
          >
            <!-- <h1 class="logo"><a href="index.html">BizPage</a></h1> -->
            <!-- Uncomment below if you prefer to use an image logo -->
            <a
              href="/"
              class="logo"
            >
              <img
                src="/logo-final.svg"
                alt="logo"
                class="img-fluid serconts-logo"
                width="100"
              />
            </a>

            <nav
              id="navbar"
              class="navbar"
            >
              <ul>
                <li>
                  <a
                    class="nav-link"
                    href="/"
                    >Inicio</a
                  >
                </li>
                <li
                  ><a
                    class="nav-link"
                    href="/about-us"
                    >Nosotros</a
                  ></li
                >
                <li>
                  <a
                    class="nav-link"
                    href="/contact"
                    >Contacto</a
                  >
                </li>
              </ul>
              <i class="bi bi-list mobile-nav-toggle"></i>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <!-- End Header -->

    <main id="main">
      <slot></slot>
    </main>

    <!-- ======= Footer ======= -->
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 footer-info">
              <img
                src="/logo-final.svg"
                alt="logo"
                class="img-fluid mb-3"
                width="180"
              />
              <p
                >Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
                nada terra videa magna derita valies darta donna mare fermentum
                iaculis eu non diam phasellus. Scelerisque felis imperdiet proin
                fermentum leo. Amet volutpat consequat mauris nunc congue.</p
              >
            </div>

            <div class="col-lg-4 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li
                  ><i class="bi bi-chevron-right"></i> <a href="#">Home</a></li
                >
                <li
                  ><i class="bi bi-chevron-right"></i>
                  <a href="#">About us</a></li
                >
                <li
                  ><i class="bi bi-chevron-right"></i>
                  <a href="#">Services</a></li
                >
                <li
                  ><i class="bi bi-chevron-right"></i>
                  <a href="#">Terms of service</a></li
                >
                <li
                  ><i class="bi bi-chevron-right"></i>
                  <a href="#">Privacy policy</a></li
                >
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 footer-contact">
              <h4>Información de contacto</h4>
              <p>
                A108 Adam Street <br />
                New York, NY 535022<br />
                United States <br />
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> info@example.com<br />
              </p>

              <div class="social-links">
                <a
                  href="#"
                  class="twitter"
                  ><i class="bi bi-twitter"></i
                ></a>
                <a
                  href="#"
                  class="facebook"
                  ><i class="bi bi-facebook"></i
                ></a>
                <a
                  href="#"
                  class="instagram"
                  ><i class="bi bi-instagram"></i
                ></a>
                <a
                  href="#"
                  class="instagram"
                  ><i class="bi bi-instagram"></i
                ></a>
                <a
                  href="#"
                  class="linkedin"
                  ><i class="bi bi-linkedin"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          &copy; Copyright <strong>SERCONTS S.A.C.</strong> Todos los derechos
          reservados
        </div>
        <div class="credits">
          Diseñado con 💚 por <a href="https://serconts.com/">SERCONTS S.A.C</a>
        </div>
      </div> </footer
    ><!-- End Footer -->
  </div>
</template>

<script>
  export default {}
</script>
