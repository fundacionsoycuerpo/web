<script context="module">
  export function preload({ params, query }) {
    return this.fetch("equipo.json")
      .then(res => res.json())
      .then(team => {
        return { team };
      });
  }
</script>

<script>
  import Member from "../../components/Member.svelte";
  export let team;
  let expanded = null;
</script>

<style>
  .members {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
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
    {#each team as member}
      <Member
        {member}
        expanded={member.email === expanded}
        on:expand={e => (expanded = e.detail)} />
    {/each}
  </div>
</div>
