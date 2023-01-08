//import { dev } from '$app/environment';
//export const csr = dev;
export const prerender = true;

import type { Page } from '@sveltejs/kit';
export const load = (page: Page) => ({
  footer: {
    copylink: {
      href: '//daks.dev',
      target: '_blank',
      label: 'DAks DEV'
    },
    links: [
      {
        href: '/privacy',
        label: 'Политика конфиденциальности'
      }
    ]
  },
  referesh: page.url.pathname
});
