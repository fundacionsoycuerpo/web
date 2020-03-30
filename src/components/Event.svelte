<script>
  export let event;
</script>

<style>
  article {
    display: flex;
    width: 100%;
    justify-content: center;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--text-color);
  }

  .content {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  .content img {
    object-fit: contain;
    object-position: top;
    width: 100%;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  }

  .content .event-description {
    padding: 20px;
    text-align: center;
  }

  .content .event-location {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 900px) {
    article {
      justify-content: flex-start;
    }
    .content {
      flex-direction: row;
      align-items: flex-start;
      width: 800px;
    }

    .content img {
      flex: 1 0 50%;
    }

    .content .event-description {
      text-align: start;
      flex: 1 0 50%;
    }

    .content .event-location {
      align-items: flex-start;
    }
  }
</style>

<article>
  <!-- <h1>Próximos eventos</h1> -->
  <div class="content">
    <img src={event.img} alt={event.imgAlt} />
    <div class="event-description">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <div class="event-location">
        <span>
          <i>{event.date}</i>
        </span>
        <br />
        <span>
          <i>{event.time}</i>
        </span>
        <br />
        <span>
          <i>{event.location}</i>
        </span>
      </div>
    </div>
  </div>
</article>
