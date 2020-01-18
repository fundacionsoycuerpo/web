
<style>
  .card {
    display: flex;
    flex-direction: column;
    margin: auto;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1),
      0 2px 4px 0 rgba(14, 30, 37, 0.12);
    transition: 0.3s;
    padding: 1rem;
    border-radius: 5px;
    align-items: left;
    margin-bottom: 2rem;
    max-width: 400px;
  }

  .big-banner {
    width: 100%;
    display: flex;
  }

  .big-banner img {
    width: 100%;
    max-width: 800px;
    height: 100%;
    margin: auto;
    object-fit: contain;
    object-position: center;
  }

  a {
    padding: 12px 24px;
    background: white;
    color: var(--contrast-bg);
    border: 1px solid var(--contrast-bg);
    border-radius: 10px;
    margin-top: 12px;
    display: inline-block;
  }

  a:hover {
    cursor: pointer;
    background: var(--contrast-bg);
    color: white;
  }
</style>

<svelte:head>
  <title>Fundación Soy Cuerpo - Donaciones</title>
</svelte:head>

<div class="inner-content">
  <h1>Donaciones</h1>
  <p>
    Con tu ayuda seguiremos desarrollando programas y proyectos en pos del
    cuerpo a nivel nacional.
  </p>
  <section>
    <h2>Dona</h2>
    <a href='https://sandbox.flow.cl/btn.php?token=efedpkl' target='_blank'>
  Donar
</a>
  </section>
  <section>
    <h2>Deposita</h2>
    <div class="card">
      <span>Nro de cuenta: 20270013326</span>
      <span>Banco: Banco Estado</span>
      <span>Tipo de cuenta: Cuenta Vista</span>
      <span>RUT: 65.176.067-4</span>
      <span>Correo: donaciones@fundacionsoycuerpo.cl</span>
    </div>
  </section>
  <section class="big-banner">
    <img src="img/colabora - generico.jpg" alt="Afiche colaboración" />
  </section>
</div>
