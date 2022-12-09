export const load = async () => ({
  image: {
    source: (await import(`$lib/assets/images/content/about/00.jpg?webp`)).default,
    thumbnail: (
      await import(`$lib/assets/images/content/about/00.jpg?w=300&h=450&webp`)
    ).default
  }
});
