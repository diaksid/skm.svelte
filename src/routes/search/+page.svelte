<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { Hit as Metrika } from '$ui/yandex/metrika';
  import { Serp as Search } from '$ui/yandex/search';

  const robots = 'noindex, follow';
  const title = 'СКМ • Поиск';
  const description = 'Поиск на сайте предпрятия СКМ';
  const canonical = '';

  let text: null | string;

  onMount(() => {
    text = $page.url.searchParams.get('text');
    document?.lazyloadInstance?.update();
  });
</script>

<Metrika
  {robots}
  {title}
  {description}
  {canonical} />

<main
  class="dark:bg-transparent"
  itemprop="mainContentOfPage">
  <header class="content w-full mb-8">
    <h1 class="title">
      Результаты поиска
      <span
        class="block -mb-2.5 pt-3
               font-mono font-normal text-xl text-slate-500">
        «{text}»
      </span>
    </h1>
  </header>

  <Search class="content mb-16" />
</main>
