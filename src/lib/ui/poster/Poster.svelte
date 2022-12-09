<script lang="ts">
  import placeholder from '$lib/assets/icons/placeholder';

  export let tag: string = 'main';

  let className: string | undefined = undefined;
  export { className as class };

  export let srcset: any[] = [];
  export let image: any | string = '';

  if (!image && srcset.length) image = srcset[srcset.length - 1];
  else if (typeof image === 'string') image = { src: image };
</script>

<svelte:element this={tag} class={className}>
  <slot />

  <picture
    class="absolute -z-10 top-0 left-0 right-0 h-full min-h-screen overflow-hidden
             flex justify-center"
    aria-hidden="true">
    {#each srcset as set, idx}
      {#if idx === srcset.length - 1}
        <source media="(min-width: {set.width}px)" srcset={set.src} />
      {:else}
        source( media="(max-width: {set.width - 1}px)" srcset="{set.src}" )
      {/if}
    {/each}
    <img
      class="lazy min-h-full w-auto"
      src={placeholder}
      data-src={image.src}
      alt="backdrop"
      loading="lazy" />
  </picture>
</svelte:element>
