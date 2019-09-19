<script>

  const pastEvents = [
    {
      name: "El Cuerpo de la Memoria",
      date: "05 de septiembre del 2019",
      location: "Museo de la Memoria y los Derechos Humanos",
      img: "fundacion-temp.jpg",
      url: "galeria/2019_09_05_el_cuerpo_de_la_memoria"
    }
  ];
  let expanded = null;
</script>

<style>
  .members {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }

  @media (max-width: 936px) {
    .members {
      display: flex;
      flex-direction: column;
    }
  }
</style>

<svelte:head>
  <title>Fundación Soy Cuerpo - Galería</title>
</svelte:head>

<div class="inner-content">
  <h1>Galería</h1>
  <div class="members">
    <ul>
      {#each pastEvents as event}
        <li>
          <a href={event.url}>{event.name}</a>
        </li>
      {/each}
    </ul>
  </div>
</div>
