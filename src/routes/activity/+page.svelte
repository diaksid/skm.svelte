<script lang="ts">
  import { onMount } from 'svelte';
  import { Hit as Metrika } from '$ui/yandex/metrika';
  import { Gallery } from '$components/gallery';
  import Infographic from './Infographic.svelte';

  import type { PageData } from './$types';
  export let data: PageData;
  const { backdrop, infographic } = data;

  const show = (x: number) =>
    (x < 640 && 1) || (x < 768 && 2) || (x < 1024 && 3) || (x < 1280 && 4) || 5;

  const title = 'СКМ • Деятельность';
  const description = 'Направления деятельности предпрятия СКМ';

  onMount(() => document?.lazyloadInstance?.update());
</script>

<Metrika
  {title}
  {description} />

<main
  class="lazy dark flex flex-col
         bg-no-repeat bg-center-top bg-cover
         dark:!bg-none"
  data-bg={backdrop.src}
  itemprop="mainContentOfPage">
  <header class="content w-full mb-4">
    <h1 class="title">Направления деятельности</h1>
  </header>

  <Infographic {infographic} />

  <Gallery
    class="hidden 2xs:block w-full mt-auto"
    {show}
    duration={5000}
    check={true} />
</main>
