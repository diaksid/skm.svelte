<script lang="ts">
  import { onMount } from 'svelte';
  import { Hit as Metrika } from '$ui/yandex/metrika';
  import { Form, Serp } from '$ui/yandex/search';

  const robots = 'noindex, follow';
  const title = 'СКМ • Поиск';
  const description = 'Поиск на сайте предпрятия СКМ';
  const canonical = '';

  onMount(() => document?.lazyloadInstance?.update());
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
    <h1 class="title">Результаты поиска</h1>
  </header>

  <Form class="content mb-8" />

  <Serp class="content mb-16" />
</main>
