<style>
  nav > div {
    display: flex;
    flex-direction: column;
  }

  nav {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }

  img {
    height: 80px;
    width: 80px;
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
    padding: 2.5rem 1rem;
  }
</style>

<footer>
  <nav>
    <a href="." routerLinkActive="active">
      <img src="img/2610_Fundacion_Soy_Cuerpo_D_01.png" alt="Logo" />
    </a>
    <div>
      <a href="quienes_somos">Quienes somos</a>
      <a href="equipo">Equipo</a>
      <a href="donaciones">Donaciones</a>
      <a href="noticias" routerLinkActive="active">Noticias</a>
    </div>
    <div>
      <a href="departamentos/arte">Departamento de arte</a>
      <a href="departamentos/plataformas">Departamento de plataformas</a>
      <a href="departamentos/salud">Departamento de salud</a>
      <a href="galeria">Galería</a>
    </div>
  </nav>
</footer>
