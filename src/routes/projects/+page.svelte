<script lang="ts">
  import { Hit as Metrika } from '$ui/yandex/metrika';
  import Grid from './Grid.svelte';
  import backdrop from '$lib/assets/images/design/bg/projects.jpg?w=1280&h=720&quality=40&webp';
  import { sources, squares } from '$lib/assets/images/gallery';

  const data = async () => ({
    images: await sources(),
    thumbnails: await squares()
  });

  const title = 'СКМ • Проекты';
  const description = 'Проекты предпрятия СКМ';
</script>

<Metrika
  {title}
  {description} />

<main
  class="lazy dark
        bg-no-repeat bg-center-top bg-cover
        dark:!bg-none"
  data-bg={backdrop.src}
  itemprop="mainContentOfPage">
  <header class="content mb-16">
    <h1 class="title">Недавние проекты</h1>
  </header>

  <Grid {data} />
</main>
