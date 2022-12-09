<script lang="ts">
  import { Hit as Metrika } from '$ui/yandex/metrika';
  import { Icon } from '$ui/iconfy';
  import { Map } from '$ui/yandex';

  const data = {
    locations: [
      {
        geometry: [55.771174, 37.60589],
        properties: {
          iconContent: '<strong class="tracking-wider">СК «МАСШТАБ»</strong>',
          balloonContentHeader: 'Строительная компания «МАСШТАБ»',
          balloonContentBody:
            '<img class=mx-auto src=/assets/images/ymap.webp width=192 height=192 />',
          balloonContentFooter:
            '<div class=text-center>время работы: 9 <sup>00</sup> -- 19 <sup>00</sup></div>'
        },
        options: {
          preset: 'islands#nightStretchyIcon'
        }
      }
    ],
    state: {
      center: [55.771174, 37.60589],
      zoom: 17,
      behaviors: ['drag', 'dblClickZoom', 'rightMouseButtonMagnifier', 'multiTouch'],
      controls: ['zoomControl', 'fullscreenControl']
    }
  };

  const title = 'СКМ • Контакты';
  const description = 'Контакты предприятия СКМ';
</script>

<Metrika
  {title}
  {description} />

<main
  class="flex flex-col dark:bg-transparent"
  itemprop="mainContentOfPage">
  <header class="content w-full pb-4">
    <h1 class="title">Контакты</h1>
  </header>

  <div
    class="content my-auto pb-4
           flex flex-col justify-between gap-7
           text-base md:text-lg lg:text-xl text-sky-800 dark:text-sky-200 align-middle">
    <a
      rel="nofollow noreferrer"
      class="hover:text-sky-500"
      href="//clck.ru/9uRC6"
      target="_blank">
      <Icon
        icon="material-symbols:location-on-outline"
        class="inline"
        width="24"
        height="24" />
      127006, г.&nbsp;Москва, ул.&nbsp;Малая Дмитровка, д.&nbsp;18а, стр.&nbsp;3
    </a>
    <a
      class="hover:text-sky-500"
      href="tel://+74953239923">
      <Icon
        icon="material-symbols:phone-in-talk-outline"
        class="inline"
        width="24"
        height="24" />
      +7 (495) 323-99-23
    </a>
    <!-- skm.moscow1@yandex.ru -->
    <a
      class="hover:text-sky-500"
      href="mailto:mail@skm.moscow">
      <Icon
        icon="material-symbols:mail-outline"
        class="inline"
        width="24"
        height="24" />
      mail@skm.moscow
    </a>
  </div>

  <Map {data} />
</main>
