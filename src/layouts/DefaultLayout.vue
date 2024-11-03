<template>
  <div class="layout">
    <!-- ======= Header ======= -->
    <header
      id="header"
      class="fixed-top d-flex align-items-center"
    >
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
              <div class="serconts-footer-presentacion">
                <img
                  src="/logo-final.svg"
                  alt="logo"
                  class="img-fluid mb-3"
                  width="180"
                />
                <h1>
                  Soluciones efectivas para proyectos con enfoque en gestión de
                  riesgos de desastres
                </h1>
                <p>
                  Impulsamos soluciones efectivas para la gestión del riesgo de
                  desastres, protegiendo comunidades y fortaleciendo proyectos.
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 footer-links">
              <h4>Enlaces</h4>
              <ul>
                <li>
                  <i class="bi bi-chevron-right"></i> <a href="/">Inicio</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <a href="/about-us">Nosotros</a>
                </li>
                <li
                  ><i class="bi bi-chevron-right"></i>
                  <a href="/contact">Contacto</a></li
                >
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 footer-contact">
              <h4>Información de contacto</h4>
              <p>
                <strong><i class="bi bi-pin-fill"></i> Dirección:</strong> Calle Santa Cecilia 12001 (Av. San Carlos)<br />
                Huancayo - Junín<br />
                Perú<br />
                <strong><i class="bi bi-phone-fill"></i> Teléfono:</strong> +51 989254899<br />
                <strong><i class="bi bi-envelope-fill"></i> Correo electrónico:</strong> sercontssac@gmail.com<br />
              </p>

              <div class="social-links">
                <a
                  href="https://www.facebook.com/people/Serconts-SAC/100063568271642/"
                  class="facebook"
                  target="_blank"
                >
                  <i class="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/sercontssac/"
                  target="_blank"
                  class="instagram"
                >
                  <i class="bi bi-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/serconts/"
                  target="_blank"
                  class="linkedin"
                >
                  <i class="bi bi-linkedin"></i>
                </a>
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

<style>
  .serconts-footer-presentacion h1 {
    font-size: 1.25rem;
    font-weight: bolder;
    color: #237c36;
    margin: 1rem 0;
  }
</style>
