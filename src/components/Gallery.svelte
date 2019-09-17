<script>
  import { crossfade, scale } from "svelte/transition";

  const [send, receive] = crossfade({
    duration: 200,
    fallback: scale
  });

  let selected = null;
  let loading = null;

  const ASSETS = `https://svelte-assets.surge.sh/crossfade`;

  const load = image => {
    const timeout = setTimeout(() => (loading = image), 100);

    const img = new Image();
    img.onload = () => {
      selected = image;
      clearTimeout(timeout);
      loading = null;
    };
    img.src = `${ASSETS}/${image.id}.jpg`;
  };

  export let images;
</script>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  /* section div {
  margin: 2px;
  background-color: violet;
  position: relative;
  height:200px; */
  /* } */
  section img {
    position: relative;
    width: 100%;
    height: auto;
    margin: 2px;
    background: lightgray;
  }
  @media (min-width: 600px) {
    section img {
      position: relative;
      height: 200px;
      width:auto;
    }
  }
</style>

<div class="container">
  <div class="m">
    <section>
      {#each images as image, i}
        <!-- <div> -->
        <img src="el_cuerpo_de_la_memoria/gallery/{image}" alt="" />
        <!-- </div> -->
      {/each}
    </section>
  </div>
</div>
