<style>
  :global(section.sc h1::before) {
    content: '';
    position: absolute;
    height: 100px;
    background: rgba(196, 253, 213, 0.3);
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

  section.events .event img{
    margin-top: 20px;
    width: 100%;
  }
  section.events .event a,
  section.projects .project a {
    margin-top: 20px;
    color: white;
  }

  @media (min-width: 415px) {
    section.events .container{
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

<div class="inner-content">

  <section class="sc description">
    <div class="container">
      <h1>Somos Cerro</h1>
      <p>
        Primera Jornada de auto-cuidado en espacios naturales, una invitación a
        habitar nuestro territorio corporal y geográfico.
      </p>
      <p>En alianza con Fundación Sendero de Chile, Vivero Cumbres</p>
    </div>
  </section>
  <section class="events">
    <div class="container">
      <div class="event">
        <h2>Somos Cerro 2019</h2>
        <a href="galeria/2019_12_21_somos_cerro">Ir a la galería</a>
        <img src="img/afiche_somos_cerro.jpg" alt="" />
      </div>
    </div>
  </section>
  <section class="projects">
    <h2>Otros proyectos</h2>
    <ul>
      <li>
        <a href="proyectos/el_cuerpo_de_la_memoria">El cuerpo de la memoria</a>
      </li>
      <li>
        <a href="proyectos/cuerpo_territorio">Cuerpo Territorio</a>
      </li>
    </ul>
  </section>
  <!-- <div class="img-wrapper">
        <img src="2019_09_05_el_cuerpo_de_la_memoria/gallery/Soy Cuerpo-IMG_7456.jpg" alt="">
        <img class="imago" src="2019_09_05_el_cuerpo_de_la_memoria/gallery/Soy Cuerpo-IMG_7463.jpg" alt="">
    </div> -->
</div>
