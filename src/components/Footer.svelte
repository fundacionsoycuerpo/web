<style>
  nav > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:start
  }

  nav > div.social {
    display: flex;
    flex-direction:row;
    align-items: center;
  }

  nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .home-anchor {
      display:none;
    }

  img.logo {
    height: 120px;
    width: 120px;
    object-fit: contain;
    object-position: center;
    filter: brightness(0) invert(1);
  }

  .social img {
    height: 40px;
    width: 40px;
    object-fit: contain;
    object-position: center;
    filter: brightness(0) invert(1);
  }

  a {
    color: var(--contrast-text-color);
    text-decoration: none;
    margin-bottom: 1rem;
  }

  a:hover {
    text-decoration: underline;
    text-decoration-color: var(--contrast-text-color);
  }

  footer {
    background: var(--contrast-bg);
    padding: 2.5rem 4rem;
  }

  @media (max-width: 880px) {
    footer {
      padding: 2.5rem 2rem;
    }
  }

   @media (max-width: 700px) {
    nav {
      flex-direction: column;
      align-items: center;
    }
    nav > div, nav > div.social {
      align-items: center;
      text-align: center;
      font-size: 1.5rem;
    }

    img.logo {
      display:none;
    }

    .home-anchor {
      display:block;
    }
  }
</style>

<footer>
  <nav>
    <div>
      <a href=".">
        <img class="logo" src="img/2610_Fundacion_Soy_Cuerpo_D_01-120x120.png" srcset="img/2610_Fundacion_Soy_Cuerpo_D_01-120x120.png 1x,img/2610_Fundacion_Soy_Cuerpo_D_01-240x240.png 2x, img/2610_Fundacion_Soy_Cuerpo_D_01-480x480.png 4x" alt="Logo" />
        <span class="home-anchor">Inicio</span>
      </a>
    </div>
    <div>
      <a href="quienes_somos">Quienes somos</a>
      <a href="equipo">Equipo</a>
      <a href="donaciones">Donaciones</a>
      <a href="noticias">Noticias</a>
      <a href="proyectos">Proyectos</a>
    </div>
    <div>
      <a href="departamentos/arte">Departamento de arte</a>
      <a href="departamentos/plataformas">Departamento de plataformas</a>
      <a href="departamentos/salud">Departamento de salud</a>
      <a href="galeria">Galería</a>
      <a href="documentos">Documentos</a>
    </div>
    <div class="social">
      <a href="https://www.facebook.com/fundacionsoycuerpo">
        <img src="svg/facebook.svg" alt="Facebook Logo" />
      </a>
      <a href="https://www.instagram.com/fundacionsoycuerpo">
        <img src="svg/instagram.svg" alt="Instagram Logo" />
      </a>
    </div>
  </nav>
</footer>
