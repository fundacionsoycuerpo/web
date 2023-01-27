<script>
	export let documents = [
		{
			name: 'Organizaciones de las danzas en Chile durante 1990 -2020 - NIDPLA',
			filename: 'organizaciones_danzas-NIDPLA.pdf'
		},
		{
			name: 'Reflexiones Fundación Soy Cuerpo - 2021',
			filename: 'reflexiones_2021_FSC.pdf'
		},
		{
			name: 'Reflexiones Fundación Soy Cuerpo - 2020',
			filename: 'reflexiones_2020_FSC.pdf'
		},
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
				<a target="_blank" rel="noopener" href={'/docs/' + doc.filename}>{doc.name}</a>
			</li>
		{/each}
	</ul>
</div>
