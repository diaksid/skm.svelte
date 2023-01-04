<script lang="ts">
  import { onMount } from 'svelte';

  export let infographic: any[];

  let className: string = '';
  export { className as class };

  onMount(() => {
    let delay = 0;
    infographic.forEach((info) => info.max && (delay = info.max > delay ? info.max : delay));
    delay = delay * 10;
    infographic.forEach((info, idx) => {
      if (info.max) {
        info.count ??= 0;
        setTimeout(() => {
          const inteval = setInterval(() => {
            if (info.count < info.max) infographic[idx].count = ++info.count;
            else {
              if (info.node) info.node.style.opacity = '1';
              clearInterval(inteval);
            }
          }, delay / info.max);
        }, 750 + 250 * idx);
      }
    });
  });
</script>

<div
  class="container
         flex flex-wrap justify-around gap-8
         my-auto py-4
         {className}">
  {#each infographic as info}
    <figure
      class="flex flex-col items-center opacity-30"
      bind:this={info.node}>
      <img
        class="mb-2"
        src={info.icon.src}
        width={info.icon.width}
        height={info.icon.height}
        alt={info.text.toLowerCase()}
        loading="eager" />
      <div
        class="mb-2
                  text-shadow font-bold text-4xl text-slate-400">
        {@html info.count || '&mdash;'} 
      </div>
      <figcaption
        class="text-center
               text-lg md:text-xl
               text-slate-300">
        {info.text}
      </figcaption>
    </figure>
  {/each}
</div>
