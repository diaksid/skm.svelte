<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit, Lightbox } from 'daks-svelte';
  import Gallery from '$lib/components/gallery';
  import { Infographic } from '$lib/components/home';

  import type { PageData } from './$types';
  export let data: PageData;
  const { logo, infographic } = data;

  const show = (x: number) => (x < 480 && 1) || (x < 1024 && 2) || 1;

  const title = 'СКМ • Строительная Компания «Масштаб»';
  const description =
    'Строительная и техническая экспертиза, обследование зданий и сооружений в Москве. Строительная компания «Масштаб»';

  onMount(() => document?.lazyloadInstance?.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main
  class="justify-between grow"
  itemprop="mainContentOfPage">
  <div
    class="container pt-8 xl:pt-12
           flex flex-wrap items-center">
    <header class="flex flex-col grow mb-8 lg:mb-12">
      <Lightbox css={{ overlay: 'overflow-offset' }}>
        <svelte:fragment slot="thumbnail">
          <img
            class="sm:inline-block
                   pb-4 mx-auto sm:mx-0
                   drop-shadow-2xl hover:sepia"
            src={logo.thumbnail.src}
            width={logo.thumbnail.width}
            height={logo.thumbnail.height}
            alt="skm: logotype thumbnail"
            loading="eager"
            itemprop="thumbnailUrl" />
          <link
            href={logo.image.src}
            rel="image"
            itemprop="primaryImageOfPage" />
          <h1
            class="sm:inline-block
                   text-shadow text-center sm:text-left dark:text-slate-400">
            <span
              class="block
                     text-3.5xl md:text-4xl xl:text-4.5xl 2xl:text-5xl uppercase">
              «Масштаб»
            </span>
            <span class="text-xl xs:text-2xl sm:text-2.5xl md:text-3.5xl 2xl:text-4.5xl">
              Строительная&nbsp;компания
            </span>
          </h1>
        </svelte:fragment>
        <img
          class="bg-no-repeat bg-center bg-1/10 bg-loading
                 hover:sepia"
          src={logo.image.src}
          width={logo.image.width}
          height={logo.image.height}
          alt="skm: logotype"
          loading="lazy" />
      </Lightbox>
      <h2
        class="pt-4 xl:pt-8 2xl:pt-12 
               text-center lg:text-left
               text-3xl xs:text-4xl md:text-5xl 2xl:text-6xl
               text-slate-700 dark:text-slate-300">
        Строим будущее <span class="whitespace-nowrap">по-новому</span>
      </h2>
    </header>

    <div class="w-full lg:max-w-xs xl:max-w-sm mx-auto px-2 mb-12 lg:-mt-12 lg:mb-0">
      <Gallery
        class="overflow-hidden rounded-md lg:rounded-lg"
        {show}
        css={{ item: 'invert hover:invert-0' }} />
      <!--SvelteKit /-->
    </div>
  </div>

  <Infographic {infographic} />

  <div
    class="container
           font-thin text-xs lg:text-sm text-justify lg:text-center text-white/50">
    Любая информация, представленная на данном сайте, носит исключительно информационный характер и
    ни при каких условиях не является публичной офертой, определяемой положениями
    статьи&nbsp;437&nbsp;ГК&nbsp;РФ.
  </div>
</main>
