<script lang="ts">
  import { Lightbox } from '$ui/lightbox';

  export let infographic: any[];
</script>

<div
  class="content my-auto pb-12 lg:pb-4
        grid gap-x-4 gap-y-10 text-center
        grid-cols-none sm:grid-cols-2 lg:grid-cols-3">
  {#each infographic as info}
    <Lightbox css={{ overlay: 'overflow-offset' }} scrollable={true}>
      <figure slot="thumbnail" class="flex flex-col items-center">
        <img
          class="mb-8"
          src={info.icon.src}
          width={info.icon.width}
          height={info.icon.height}
          alt={info.title}
          loading="eager" />
        <figcaption class="text-xl text-slate-300">
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
