<style>
 .item {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  .item img {
    object-fit: contain;
    object-position: top;
    width: 100%;
  }

  .item .event-description {
    padding: 20px;
    text-align: center;
  }

  .item .event-location {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 900px) {
    .item {
      flex-direction: row;
      align-items: flex-start;
      width: 800px;
    }

    .item img {
      flex: 1 0 50%;
    }

    .item .event-description {
      text-align: start;
      flex: 1 0 50%;
    }

    .item .event-location {
      align-items: flex-end;
    }
  }

  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>



<section class="events">
      <h1>Próximos eventos</h1>
      <div class="item">
        <img src="fundacion-temp.jpg" alt="" />
        <div class="event-description">
          <h3>El Cuerpo de la Memoria</h3>
          <p>
            Encuentro de danza y reflexión.
            <br />
            Celebración Día Internacional de la Mujer indígena
          </p>
          <div class="event-location">
            <span>
              <i>Jueves 5 de septiembre</i>
            </span>
            <br />
            <span>
              <i>19:00</i>
            </span>
            <br />
            <span>
              <i>Museo de la Memoria</i>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- temporal::content -->