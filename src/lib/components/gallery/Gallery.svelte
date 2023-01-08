<script lang="ts">
  import { linear } from 'svelte/easing';
  import { Carousel } from 'daks-svelte';
  import { screens as load } from '$lib/assets/images/gallery';

  let promise = load();

  let className: string | undefined = undefined;
  export { className as class };

  export let show: number | ((x: number) => number) = 1;
  export let duration: number = 5000;
  export let delay: number = 2000;
  export let check: boolean = false;

  let innerWidth: number;
  $: count = typeof show === 'function' ? show(innerWidth) : show;

  let checked = 0;
  const loaded = () => checked++;
</script>

<svelte:window bind:innerWidth />

<section class="relative
                {className}">
  {#await promise}
    <div
      class="aspect-video mx-auto
             bg-no-repeat bg-center bg-loading-data bg-1/3"
      style:min-width={`${100 / count}%`}
      style:max-width={`${100 / count}%`} />
  {:then images}
    <Carousel
      {images}
      {show}
      {duration}
      {delay}
      easing={linear}
      autoplay={true}
      controls="play mouse"
      {loaded}
      {...$$restProps} />
    {#if check}
      <div
        class="absolute top-1 left-1
               text-center font-semibold text-black/50">
        {checked} <sup>{images.length}</sup>
      </div>
    {/if}
  {:catch error}
    <div
      class="error
             aspect-video mx-auto"
      style:min-width={`${100 / count}%`}
      style:max-width={`${100 / count}%`}>
      {error.message}
    </div>
    {@debug error}
  {/await}
</section>
