<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit } from '$lib/seo/yandex/metrika';
  import { Gallery } from '$lib/components/gallery';
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

<YandexMetrikaHit
  {title}
  {description} />

<main
  class="justify-between min-h-screen"
  itemprop="mainContentOfPage">
  <header class="content mb-0">
    <h1 class="title">Направления деятельности</h1>
  </header>

  <Infographic {infographic} />

  <Gallery
    class="hidden 2xs:block w-full"
    {show}
    duration={5000}
    check={true} />
</main>
