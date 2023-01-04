<script lang="ts">
  import { spring } from 'svelte/motion';
  import Icon from '$lib/ui/iconfy';

  let className: string = '';
  export { className as class };

  import { count } from '$lib/stores';

  const increment = () => count.update(value => ++value);
  const decrement = () => count.update(value => --value);

  const displayed_count = spring();
  $: displayed_count.set($count);
  const modulo = (n: number, m: number) => ((n % m) + m) % m;
  $: offset = modulo($displayed_count, 1);
</script>

<h3
  class="text-5xl text-center
          text-red-700 dark:text-red-500">
  SvelteKit
</h3>
<h4
  class="mb-5 text-xl text-center
         text-green-700 dark:text-green-500">
  tailwindcss
</h4>

<div
  class="flex items-center max-w-min mx-auto mb-5
         border-t-2 border-b-2 border-slate-200
         {className}">
  <button
    class="flex items-center justify-center w-32
           text-4xl text-slate-500 border-0 touch-manipulation"
    aria-label="Уменьшить счётик"
    on:click={decrement}>
    <Icon
      icon="material-symbols:sentiment-dissatisfied-outline"
      class="w-auto stroke-2 vector-non-scaling-stroke drop-shadow-lg
            hover:animate-ping hover:text-red-700"
      ariaHidden="true" />
  </button>

  <div class="relative w-28 h-14 overflow-hidden">
    <div
      class="absolute w-full h-full text-5xl align-middle text-center font-semibold
            text-zinc-500 dark:text-zinc-300"
      style="transform: translate(0, {100 * offset}%)">
      <div
        class="absolute w-full h-full select-none top-[-100%] back"
        aria-hidden="true">
        {Math.floor($displayed_count + 1)}
      </div>
      <div class="absolute w-full h-full">
        {Math.floor($displayed_count)}
      </div>
    </div>
  </div>

  <button
    class="flex items-center justify-center w-32 text-4xl text-slate-500 border-0 touch-manipulation"
    aria-label="Увеличить счётик"
    on:click={increment}>
    <Icon
      icon="material-symbols:sentiment-satisfied-outline"
      class="w-auto stroke-2 vector-non-scaling-stroke drop-shadow-lg
            hover:animate-ping hover:text-green-700"
      ariaHidden="true" />
  </button>
</div>
