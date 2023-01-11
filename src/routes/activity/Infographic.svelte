<script lang="ts">
  import { Lightbox } from 'daks-svelte';

  export let infographic: any[];
</script>

<div
  class="content py-4
        grid gap-x-4 gap-y-10 text-center
        grid-cols-none sm:grid-cols-2 lg:grid-cols-3">
  {#each infographic as info}
    <Lightbox css={{ overlay: 'overflow-offset' }} scrollable={true}>
      <figure slot="thumbnail" class="flex flex-col items-center">
        <img
          class="p-5 mb-8 bg-slate-500 dark:bg-transparent rounded-xl drop-shadow-lg  shadow-gray-400"
          src={info.icon.src}
          width={info.icon.width}
          height={info.icon.height}
          alt={info.title}
          loading="eager" />
        <figcaption class="text-xl dark:text-slate-300">
          {info.title}
        </figcaption>
      </figure>
      <div class="content py-8 px-12 rounded-sm text-black bg-white">
        <h3 class="title mb-6">{info.title}</h3>
        {@html info.content}
      </div>
    </Lightbox>
  {/each}
</div>
