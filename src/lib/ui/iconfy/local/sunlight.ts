import { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

addCollection({
  prefix: 'local',
  icons: {
    sunlight: {
      body: `
          <path
            fill="currentColor"
            fill-opacity="0.2"
            stroke="currentColor"
            stroke-width="2"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          <path
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"/>
        `
        .trim()
        .replace(/\s{2,}/g, ' ')
        .replace(/\n/g, '')
    }
  },
  width: 24,
  height: 24
});
