<script>
  export let documents = [
    {
      name: 'Reflexiones Fundación Soy Cuerpo - 2019',
      filename: 'reflexiones_2019_FSC.pdf'
    }
  ];
</script>

<svelte:head>
  <title>Fundación Soy Cuerpo - Documentos</title>
</svelte:head>

<div class="inner-content">
  <h1>Documentos</h1>
  <ul class="galleries">
    {#each documents as doc}
      <li>
        <a target="_blank" rel="noopener" href={'docs/' + doc.filename}>{doc.name}</a>
      </li>
    {/each}
  </ul>
</div>
