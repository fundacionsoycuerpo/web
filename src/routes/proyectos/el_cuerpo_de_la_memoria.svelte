<script>
  import Alert from '../../components/Alert.svelte';
</script>

<style>
  :global(section.ecdlm h1::before) {
    content: '';
    position: absolute;
    height: 100px;
    background: rgba(206, 105, 138, 0.3);
    width: 22ch;
    top: -2rem;
    z-index: -1;
  }

  section.description {
    position: relative;
    overflow: hidden;
    background: white;
    width: 100%;
  }

  section.description .container {
    /* display: flex; */
    width: 100%;
  }

  section.description p {
    flex: 1 1 50%;
    font-size: 1.5rem;
    line-height: 1.2em;
    margin-top: 1rem;
  }

  section.description h1 {
    display: block;
    position: relative;
    text-transform: uppercase;
    z-index: 1;
    font-size: 3rem;
  }

  @media (min-width: 415px) {

    section.description h1 {
      font-size: 5rem;
    }

    section.description p {
      margin-top: 2rem;
    }
  }

  section.events,
  section.projects {
    position: relative;
    overflow: hidden;
    background: white;
    width: 100%;
  }
  section.events .container {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  section.events .event {
    flex: 1 1 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 5px;
  }

  section.events .event + .event {
    margin-top: 20px;
  }

  section.events .event img {
    margin-top: 20px;
    width: 100%;
  }
  section.events .event a.button {
    margin-top: 20px;
    border: 2px solid black;
    padding: 8px 16px;
    text-decoration:none;
    color: black;
    border-radius: 5px;
    text-align:center;
  }

  section.events .event a:visited.button {
    color: black;
  }

  section.events .event a,
  section.projects .project a {
    margin-top: 20px;
    color: black;
  }

  @media (min-width: 415px) {
    section.events .container {
      flex-direction: row;
    }
    section.events .event {
      flex: 0 1 calc(50% - 10px);
    }

    section.events .event + .event {
      margin-top: 0;
    }
  }

  section.projects {
    display: flex;
    flex-direction: column;
  }

  section.projects a {
    /* text-decoration: none; */
    line-height: 1.5;
    color: black;
  }

   section.projects a:visited {
    color: black;
  }


  section.projects ul {
    margin-top: 1rem;
  }
</style>

<Alert />
<div class="inner-content">

  <section class="ecdlm description">
    <div class="container">
      <h1>El cuerpo de la memoria</h1>
      <p>
        Es un encuentro que reflexiona desde el cuerpo y su existencia
        saludable,en armonía con su historia, reivindicando su memoria y
        visibilizando la emancipación de nuestro territorio cuerpo. Tiene como
        objeto promover el desarrollo íntegro del ser humano, a partir del
        rescate de las memorias del cuerpo, generando un espacio para la
        reparación emocional y mental.
      </p>
    </div>
  </section>
  <section class="events">
    <div class="container">
      <div class="event">
        <h2>El Cuerpo de la Memoria 2019</h2>
        <a href="galeria/2019_09_05_el_cuerpo_de_la_memoria">Ir a la galería</a>
        <img src="img/afiche_el_cuerpo_de_la_memoria.jpg" alt="" />
      </div>

      <div class="event">
        <h2>El Cuerpo de la Memoria 2020</h2>
        <a class="button" target="__blank" rel="noopener" href="docs/ECDLM_2020_bases.pdf">Descargar bases 2020</a>
        <img src="img/el_cuerpo_de_la_memoria_2020-pronto-2.jpg" alt="" />
      </div>
    </div>
  </section>
  <section class="projects">
    <h2>Otros proyectos</h2>
    <ul>
      <li>
        <a href="proyectos/somos_cerro">Somos Cerro</a>
      </li>
      <li>
        <a href="proyectos/cuerpo_territorio">Cuerpo Territorio</a>
      </li>
    </ul>
  </section>
</div>
