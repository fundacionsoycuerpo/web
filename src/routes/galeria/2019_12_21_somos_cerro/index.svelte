<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`galeria/2019_12_21_somos_cerro/images.json`)
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

  let alt = "Encuentro Somos Cerro";
  let source = "somos_cerro"
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
  <title>Fundación Soy Cuerpo - Eventos - Somos Cerro - 2019</title>
</svelte:head>

<div class="container">
  <div class="image">
    <img class="gallery-item" src="{source}/portada.jpg" alt="Background" />
  </div>
  <div class="inner-content">
    <h1>Somos Cerro. 1era Jornada de Autocuidado en Espacios Naturales</h1>
    <h2>21 de diciembre del 2019</h2>
    <h3>Vivero Cumbre. Cerro San Cristóbal.</h3>
    <div class="gallery">
      <Gallery {images} {alt} {source} />
    </div>
  </div>
</div>
