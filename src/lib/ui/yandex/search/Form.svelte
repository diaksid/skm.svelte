<script type="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  let className: string = '';
  export { className as class };

  const searchid = import.meta.env.VITE_YA_SEARCHID;
  const action = '/search'; // 'https://yandex.ru/search/site/'
  const target = '_self'; // '_blank'

  let form: HTMLFormElement;
  let text: null | string;
  onMount(() => text = $page.url.searchParams.get('text'));
</script>

<div
  class="ya-site-form ya-site-form_inited_no
         {className}">
  <form
    bind:this={form}
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
      bind:value={text}
      class="grow py-0.5 px-2
            text-gray-700 bg-slate-300 rounded
            focus:bg-gray-100 focus:outline-none"
      type="search"
      name="text" />
    <input
      on:click={() => form.submit()}
      class="py-0.5 px-2 ml-2
             bg-slate-700 rounded cursor-pointer
             disabled:text-gray-500"
      type="button"
      disabled={!text?.trim() || text?.trim() === $page.url.searchParams.get('text')}
      value="Найти" />
  </form>
</div>
