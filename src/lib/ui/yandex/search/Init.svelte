<script type="ts">
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
</script>

<style lang="postcss">
  :global(.ya-page_js_yes .ya-site-form_inited_no) {
    @apply hidden;
  }
</style>
