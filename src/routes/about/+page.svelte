<script lang="ts">
  import { onMount } from 'svelte';
  import { Hit as Metrika } from '$ui/yandex/metrika';
  //import { Gallery } from '$components/gallery';
  import type { PageData } from './$types';

  export let data: PageData;
  const { image } = data;

  const title = 'СКМ • О предприятии';
  const description = 'О предприятии СКМ';

  onMount(() => document?.lazyloadInstance?.update());
</script>

<Metrika
  {title}
  {description} />

<main
  class="flex flex-col dark:bg-transparent"
  itemprop="mainContentOfPage">
  <header class="content w-full pb-4">
    <h1 class="title">О предприятии</h1>
  </header>

  <div
    class="content  pb-12 lg:pb-4 my-auto
              flex flex-wrap lg:flex-nowrap gap-8">
    <div class="flex-auto text-lg">
      <h2 class="mb-7">Строительная компания «МАСШТАБ»</h2>
      <p>
        Строительная компания «Масштаб» является достаточно молодой и перспективной организацией,
        занимающейся контролем за соблюдением технологических процессов строительного производства,
        включающих в себя входной контроль качества строительных материалов и продукции поступающей
        на строительную площадку, оценку технического состояния зданий и сооружений, мониторинг
        объектов нового строительства и окружающей застройки попадающей в геотехническую зону
        влияния.
      </p>
      <p>
        Сотрудниками Строительной компании «Масштаб» являются <b
          >высококвалифицированные специалисты</b>
        с <b>высшим строительным образованием</b>, а так же <b>судебно-технические эксперты</b>.
      </p>
    </div>

    <img
      rel="thumbnailURL"
      class="flex-initial mx-auto
            bg-no-repeat bg-center bg-1/5 bg-loading"
      src={image.thumbnail.src}
      width={image.thumbnail.width}
      height={image.thumbnail.height}
      alt="skm: thumbnail"
      loading="eager" />
    <link
      rel="image"
      href={image.source.src} />
  </div>

  <!--Gallery class="mt-auto" show={4} duration={5000} /-->
</main>
