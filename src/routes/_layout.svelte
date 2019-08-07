<script>
  import Nav from "../components/Nav.svelte";
  import SideMenu from "../components/SideMenu.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<style>
   main {
    margin-top: 80px;
    min-height: calc(100vh - 80px - 4rem);
  }
  @media (min-width: 490px) {
    main {
      margin-top: 80px;
      min-height: calc(100vh - 80px - 10rem);
    }
  }
</style>

<Nav {segment} />
<SideMenu {segment} />
<main>
  <slot />
</main>
<Footer {segment} />
