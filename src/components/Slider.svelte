<script>
  import { cubicOut } from 'svelte/easing';
  export let slides = [];
  export let auto = true;
  export let interval = 5000;

  let cur = 0;

  function changeSlide(slide) {
    cur = slide;
  }

  const clamp = (number, min, max) => Math.min(Math.max(number, min), max);

  function prev(e) {
    cur = clamp(--cur, 0, slides.length - 1);
  }

  function next(e) {
    if (cur < slides.length - 1) {
      cur = clamp(++cur, 0, slides.length - 1);
    } else {
      cur = 0;
    }
  }

  const ARROW_LEFT = 37;
  const ARROW_RIGHT = 39;
  function handleShortcut(e) {
    if (e.keyCode === ARROW_LEFT) {
      prev();
    }
    if (e.keyCode === ARROW_RIGHT) {
      next();
    }
  }
  if (auto) {
    setInterval(() => {
      next();
    }, interval);
  }
</script>

<style>
  .extra-outer-wrapper {
    width: 100vw;
    height: 100%;
    overflow: hidden;
  }

  .inner-wrapper {
    /* height: 100%; */
    display: flex;
    width: 100vw;
    height: 100%;
    overflow: hidden;
    will-change: contents;
  }

  .slide {
    flex: 1 0 auto;
    width: 100%;
    height: 100%;
    background: transparent;
    color: white;
    transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    position: relative;
  }

  :global(.slide img) {
    height: 100%;
    width: 100vw;
  }

</style>

<!-- taken from https://svelte.dev/repl/0add35f59c6148cc8e5a415b2e38c83a?version=3.16.7 -->
<!-- <svelte:window on:keyup={handleShortcut} /> -->

<div class="extra-outer-wrapper">
  <div class="inner-wrapper">
    {#each slides as slide, i}
      <div
        style="transform: translateX({cur * -1 * 100}vw)"
        class="slide">
        {#if slide.imgSrc}
          <img src={slide.imgSrc} alt={slide.imgAlt} />
        {/if}
      </div>
    {/each}
  </div>
</div>