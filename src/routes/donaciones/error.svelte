<style>
  .error {
    display: flex;
    flex-direction: column;
  }
  img {
    flex: 0 0 200px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 600px) {
    .error {
      flex-direction: row;
      align-items: center;
    }
  }

  .error > div {
    flex: 1 1 50%;
    margin-left: 2rem;
  }
</style>

<svelte:head>
  <title>Fundación Soy Cuerpo - Donación exitosa</title>
</svelte:head>

<div class="inner-content">
  <div class="error">
    <img src="img/logo_bg.jpg" alt="Logo fundacion soy cuerpo" />
    <div>
      <h1>¡Oh!</h1>
      <p>
        Hubo un error en el proceso de donación. Te agradecemos intentar nuevamente.
    </div>
  </div>
</div>
