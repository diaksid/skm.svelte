<script lang="ts">
  import { Hit as Metrika } from '$ui/yandex/metrika';
  import Grid from './Grid.svelte';
  import data from '$lib/assets/images/content/permissions';

  const title = 'СКМ • Допуски';
  const description = 'Допуски предпрятия СКМ';
</script>

<Metrika
  {title}
  {description} />

<main class="dark:bg-transparent" itemprop="mainContentOfPage">
  <header class="content mb-16">
    <h1 class="title">Допуски</h1>
  </header>

  <Grid {data} />
</main>
