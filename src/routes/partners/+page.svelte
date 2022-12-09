<script lang="ts">
  import { Hit as Metrika } from '$ui/yandex/metrika';
  import Grid from './Grid.svelte';
  import data from '$lib/assets/images/content/partners';

  const promise = data();

  const title = 'СКМ • Партнёры';
  const description = 'Партнёры предпрятия СКМ';
</script>

<Metrika
  {title}
  {description} />

<main class="dark:bg-transparent" itemprop="mainContentOfPage">
  <header class="content mb-16">
    <h1 class="title">Наши партнеры</h1>
  </header>

  {#await promise}
    <div
      class="w-[30rem] aspect-video mx-auto
             bg-no-repeat bg-center bg-loading-data bg-1/3" />
  {:then partners}
    <Grid {partners} />
  {:catch error}
    <div
      class="error
             w-[30rem] aspect-video mx-auto">
      {error.message}
    </div>
    {@debug error}
  {/await}
</main>
