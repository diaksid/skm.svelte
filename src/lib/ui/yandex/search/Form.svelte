<script type="ts">
  let className: string = '';
  export { className as class };

  const searchid = import.meta.env.VITE_YA_SEARCHID;
  const action = '/search.html'; // 'https://yandex.ru/search/site/'
  const target = '_blank'; // '_self'

  const dataBem = undefined;
  /*
  JSON.stringify({
    action: action,
    arrow: false,
    bg: 'transparent',
    fontsize: 13,
    fg: '#000000',
    language: 'ru',
    logo: 'rb',
    publicname: 'Поиск по skm.moscow и stroyexp.info',
    suggest: true,
    target: target,
    tld: 'ru',
    type: 2,
    usebigdictionary: true,
    searchid: searchid,
    input_fg: '#000000',
    input_bg: '#ffffff',
    input_fontStyle: 'normal',
    input_fontWeight: 'normal',
    input_placeholder: null,
    input_placeholderColor: '#000000',
    input_borderColor: '#7f9db9'
  });

  import { onMount } from 'svelte';

  onMount(() => {
    (function (w: any, i) {
      (w[i] || (w[i] = [])).push(function () {
        Ya.Site.Form.init();
      });
      console.log('init');
    })(window, 'yandex_site_callbacks');
    const el = document.createElement('script');
    el.src = 'https://site.yandex.net/v2.0/js/all.js';
    el.async = true;
    document.head.appendChild(el);
  });
  */
</script>

<div
  class="ya-site-form ya-site-form_inited_no
         {className}"
  data-bem={dataBem}>
  <form
    class="flex flex-row justify-between items-center"
    {action}
    method="get"
    {target}
    charset="utf-8">
    <input
      type="hidden"
      name="searchid"
      value={searchid} />
    <input
      type="hidden"
      name="l10n"
      value="ru" />
    <input
      type="hidden"
      name="reqenc"
      value="" />
    <input
      class="grow py-0.5 px-2 rounded focus:outline-none text-gray-700"
      type="search"
      name="text"
      value="" />
    <input
      class="py-0.5 px-2 ml-2 bg-slate-700 rounded cursor-pointer"
      type="submit"
      value="Найти" />
  </form>
</div>
