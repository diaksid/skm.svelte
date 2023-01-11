export const load = async () => ({
  logo: {
    image: (await import(`$lib/assets/images/design/skm/logo.png?webp`)).default,
    thumbnail: (await import(`$lib/assets/images/design/skm/logo.png?w=210&webp`))
      .default
  },
  infographic: [
    {
      text: 'Научных инженеров',
      icon: (await import(`$lib/assets/images/content/home/info.0.png?w=144&webp`))
        .default,
      max: 25
    },
    {
      text: 'Сотрудников компании',
      icon: (await import(`$lib/assets/images/content/home/info.1.png?w=144&webp`))
        .default,
      max: 37
    },
    {
      text: 'Реализованных проектов',
      icon: (await import(`$lib/assets/images/content/home/info.2.png?w=144&webp`))
        .default,
      max: 100
    },
    {
      text: 'Действующих проектов',
      icon: (await import(`$lib/assets/images/content/home/info.3.png?w=144&webp`))
        .default,
      max: 52
    }
  ]
});
