<script>
  import { createEventDispatcher } from 'svelte';
  export let member;
  export let expanded = false;
  export let flat = false;
  const dispatch = createEventDispatcher();

  function expand(event) {
    dispatch('expand', expanded ? null : member.email);
  }
</script>

<style>
  .card {
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1),
      0 2px 4px 0 rgba(14, 30, 37, 0.12);
    transition: 0.3s;
    padding: 1rem;
    border-radius: 5px;
    align-items: center;
    margin-bottom: 2rem;
  }

  .card.flat {
    box-shadow: none;
    padding: 0;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .card.flat:hover {
    box-shadow: none;
  }

  .main-info {
    display: flex;
    flex-direction: column;
  }

  .info {
    display: flex;
    width: 100%;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 1rem;
  }

  .actions .button {
    height: 40px;
    width: 40px;
  }

  .expanded-info {
    margin-top: 2rem;
  }

  .expanded-info :global(p) {
    margin-bottom: 1rem;
  }

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    object-position: center;
    margin-right: 1rem;
    border-radius: 50%;
  }

  @media (max-width: 530px) {
    .info {
      flex-direction: column;
      align-items: center;
    }

    .main-info {
      margin-top: 1rem;
      align-items: center;
    }

    img {
      margin-right: 0;
    }
  }

  a {
    text-decoration: none;
    color: var(--text-color);
  }
  a:hover {
    text-decoration: underline;
  }
</style>

<div class="card {flat ? 'flat' : ''}">
  <div class="info">
    <img src={member.avatar.image.url} alt={member.avatar.caption} />
    <div class="main-info">
      <span>
        <b>{member.name}</b>
      </span>
      <span>{member.role}</span>
      <a href="mailto:{member.email}">{member.email}</a>
    </div>
  </div>
  <div class="actions">
    <button
      class="button"
      aria-label={expanded ? 'Ver menos' : 'Ver más'}
      on:click={expand}>
      {expanded ? '-' : '+'}
    </button>
  </div>
  {#if expanded}
    <div class="expanded-info">
      {@html member.bio}
    </div>
  {/if}
</div>
