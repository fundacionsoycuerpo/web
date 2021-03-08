<script context="module">
  export function preload({ params, query }) {
    return this.fetch('equipo.json')
      .then(res => res.json())
      .catch(err => this.error(404, 'Page Not found'));
  }
</script>

<script>
  import Member from '../../components/Member.svelte';
  export let members;
  let expanded = null;
</script>

<style>
  .members {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 936px) {
    .members {
      display: flex;
      flex-direction: column;
    }
  }
</style>

<svelte:head>
  <title>Fundación Soy Cuerpo - Equipo</title>
</svelte:head>

<div class="inner-content">
  <h1>Equipo Humano</h1>
  <div class="members">
    {#each members as member}
      <Member
        {member}
        expanded={member.email === expanded}
        on:expand={e => (expanded = e.detail)} />
    {/each}
  </div>
</div>
