<script lang="ts">
  import { onMount } from 'svelte';
  import { Serp as Search } from '$ui/yandex/search';

  const title = 'СКМ • Поиск';
  const description = 'Поиск на сайте предпрятия СКМ';

  onMount(() => document?.lazyloadInstance?.update());
</script>

<svelte:head>
  <meta
    name="robots"
    content="noindex, follow" />
  <title>{title}</title>
  <meta
    name="description"
    content={description} />
</svelte:head>

<main
  class="dark:bg-transparent"
  itemprop="mainContentOfPage">
  <header class="content w-full mb-4">
    <h1 class="title">Результаты поиска</h1>
  </header>

  <Search class="content mb-16" />
</main>
