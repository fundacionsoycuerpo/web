<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`galeria/2019_09_05_el_cuerpo_de_la_memoria/images.json`)
      .then(r => r.json())
      .then(images => {
        return { images };
      });
  }
</script>

<script>
  import Gallery from "../../../components/Gallery.svelte";

  export let segment;
  export let images;
</script>

<style>
  .container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    /* height: 70vh; */
    max-height: 70vh;
  }

  .gallery {
    margin-top: 3rem;
  }
</style>

<svelte:head>
  <title>Fundación Soy Cuerpo - Eventos - El Cuerpo de la Memoria - 2019</title>
</svelte:head>

<div class="container">
  <div class="image">
    <img class="gallery-item" src="el_cuerpo_de_la_memoria/IMG_7277_comp.jpg" alt="Background" />
  </div>
  <div class="inner-content">
    <h1>El Cuerpo de la Memoria</h1>
    <h2>05 de septiembre del 2019</h2>
    <h3>Museo de la Memoria y los Derechos Humanos</h3>
    <div class="gallery">
      <Gallery {images} />
    </div>
  </div>
</div>
