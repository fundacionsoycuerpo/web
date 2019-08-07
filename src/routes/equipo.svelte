<script>
  import Member from "../components/Member.svelte";

  const members = [
    {
      name: "Javiera Beas Álvarez",
      email: "javiera@fundacionsoycuerpo.cl",
      role: "Presidenta - Directora",
      img: "img/javiera.jpg",
      bio: [
        `Artista independiente, formada como intérprete creadora en danza. 
      En sus roles de performer, directora, pedagoga y artesana acciona 
      y desarrolla constantemente el camino del arte, la investigación y construcción de la sociedad 
      a partir de un entendimiento integral e inclusivo del ser humano, basando sus prácticas creativas 
      y pedagógicas en disciplinas entorno al cuerpo, como primer territorio de gestación 
      y transformación de la cultura. Con estudios de posgrado formales e informales en Chile 
      y en el extranjero revitaliza su trabajo.`,
        `Pedagoga en Danza titulada en Universidad ARCIS.`,
        `Magíster en Artes de la Pontificia Universidad Católica de Chile. Diplomada en Gestión Cultural en la Universidad de Chile.`,
        `Ashtanga yoga teacher en UniversalYoga, India.`,
        `Profesora de Yoga Integral de la Sociedad Internacional de Yoga Integral, Argentina.`
      ]
    },
    {
      name: "Ninoska Valenzuela Benavides",
      email: "ninoska@fundacionsoycuerpo.cl",
      role: "Secretaria - Encargada Depto. de Salud",
      img: "img/ninoska.jpg",
      bio: [
        `Bailarina y performer. Posee estudios universitarios en Santiago de Chile, cursando un año
      de pedagogía en danza en Universidad ARCIS, para finalmente egresar como Licenciada en
      Artes con mención en Danza de la Facultad de Artes de la Universidad de Chile. Su
      constante formación está combinada por estudios de diversos estilos del área de las artes,
       terapias ThetaHealing y Yoga. Realizando estudios profesionales y autodidacta, además de
      seminarios e investigaciones con artistas escénicos y maestros nacionales e internacionales
      de Noruega, Brasil, Estados Unidos, Francia, España, México.`
      ]
    },
    {
      name: "Laura Cruz Guerra",
      email: "laura@fundacionsoycuerpo.cl",
      role: "Tesorera - Encargada Administración y Finanzas",
      img: "img/laura.jpg",
      bio: [
        `Ingeniero Civil Industrial mención Sistemas de Gestión de la Universidad Tecnológica 
        Metropolitana, con alto compromiso e interés de trabajo en equipo, destaca en labores de 
        gestión, seguimiento y coordinación de contratos; apoyo y coordinación en el 
        cumplimiento de metas; gestión interna con otras áreas para la presentación a licitaciones 
        y estudios; elaboración de información para propuestas; levantamiento y control de procesos y 
        coordinación de tareas entre otros.`
      ]
    },
    {
      name: "Ana Cristina Araya Matthies",
      email: "anacristina@fundacionsoycuerpo.cl",
      role: "Encargada Depto. de Arte",
      img: "img/anacristina.jpg",
      bio: [
        `Bailarina, coreógrafa y pedagoga de Danza de la Universidad ARCIS. Se ha desarrollado en el
      ámbito de la creación e improvización, profundizando sus estudios con destacados maestros
      de la escena de la Danza contemporánea actual chilena e internacional. Como artista ha
      generado diversos espacios de reflexión y práctica coreográfica con bailarines y artistas de
      otras diciplinas. Paralelamente ha trabajado durante años en plataformas de Fundrasing
      para varias Fundaciones con fines de desarrollo social-cultural.`
      ]
    },
    {
      name: "Ignacio Falk",
      email: "ignacio@fundacionsoycuerpo.cl",
      role: "Encargado Depto. de Plataformas",
      img: "img/ignacio.jpg",
      bio: [
        `Egresado de la carrera de sonido de la Universidad de Chile. Se desenvuelve en diversas
      estaciones de radio como ingeniero, como Product Manager en proyectos de programación
      de software y, como intérprete musical en diferentes bandas, en Chile y el extranjero.
      Siendo poseedor de una vasta disciplina, flexibilidad y orden debido a su autoformación en
      áreas complejas, preside el departamento de plataformas.`
      ]
    }
  ];

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
    {#each members as member}
      <Member
        {member}
        expanded={member.email === expanded}
        on:expand={e => (expanded = e.detail)} />
    {/each}
  </div>
</div>
