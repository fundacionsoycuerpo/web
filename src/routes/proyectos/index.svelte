<script>
  import ProjectCard from '../../components/ProjectCard.svelte';
  let slides = [
    {
      imgSrc: 'img/banner-el_cuerpo_de_la_memoria.jpg',
      imgAlt: 'Banner proyecto el cuerpo de la memoria',
      linkText: 'Ver Proyecto',
      link: 'proyectos/el_cuerpo_de_la_memoria'
    },
    {
      imgSrc: 'img/banner-cuerpo_territorio.jpg',
      imgAlt: 'Banner proyecto cuerpo territorio',
      linkText: 'Ver Proyecto',
      link: 'proyectos/cuerpo_territorio'
    },
    {
      imgSrc: 'img/banner-somos_cerro.jpg',
      imgAlt: 'Banner proyecto somos cerro',
      linkText: 'Ver Proyecto',
      link: 'proyectos/somos_cerro'
    }
  ];

  let projects = [
    {
      title: 'El Cuerpo de la Memoria',
      description: 'lorem',
      link: 'proyectos/el_cuerpo_de_la_memoria',
      color: 'rgba(206, 105, 138, 0.3)'
    },
    {
      title: 'Somos Cerro',
      description: 'lorem',
      link: 'proyectos/somos_cerro',
      color: 'rgba(196, 253, 213, 0.3)'
    },
    {
      title: 'Cuerpo territorio',
      description: 'lorem',
      link: 'proyectos/cuerpo_territorio',
      color: 'rgba(255, 191, 176, 0.3)'
    }
  ];
</script>

<style>
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

    .projects-list {
    display: grid;
    width: 100%;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

</style>

<div class="container">
  <div class="inner-content">
    <section>
      <h1>Proyectos</h1>
          {#if projects && projects.length}
        <div class="projects-list">
          {#each projects as project, i}
            <ProjectCard {project} />
          {/each}
        </div>
    {/if}
      <!-- {#each slides as slide, i}
        <div class="slide">
          {#if slide.imgSrc}
            <img src={slide.imgSrc} alt={slide.imgAlt} />
            <a href={slide.link}>{slide.linkText}</a>
          {/if}
        </div>
      {/each} -->
    </section>
  </div>

</div>
