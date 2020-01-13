<script>
  import { menuIsOpen } from "../stores.js";

  import Hamburguer from "../components/Hamburguer.svelte";

  export let segment;

  function close() {
    menuIsOpen.update(isOpen => false);
  }
</script>

<style>
  header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    color: var(--text-color);
    z-index: 10;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    background: white;
  }

  img {
    height: 60px;
    width: 60px;
    object-fit: contain;
    object-position: center;
  }

  a.button {
    cursor: pointer;
    background: var(--contrast-bg);
    color: white;
    padding: 10px;
    border-radius: 5px;
  }

  .logo-link {
    position: absolute;
    left: calc(50% - 30px);
  }

  a {
    text-decoration: none;
  }
</style>

<header>
  <Hamburguer />
  <a
    class="logo-link {segment === undefined ? 'active' : ''}"
    href="."
    on:click={close}>
    <img src="img/2610_Fundacion_Soy_Cuerpo_D_01.png" alt="Logo" />
  </a>
  <a class="button" href="donaciones" on:click={close}>Colabora</a>
</header>
