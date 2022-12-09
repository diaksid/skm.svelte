// const rand = (min: number, max: number) => Math.round(Math.random() * (max - min) + min);
//`https://picsum.photos/seed/${rand(0,200)}/800/800`
/*
const loader = async (directives = '') => {
  directives = '?' + directives + (directives ? '&' : '') + 'webp';
  const images = [];
  for (let i = 0; i < 19; i++)
    images.push(
      (
        await import(
          `$lib/assets/images/gallery/${(i < 10 ? '0' : '') + i}.jpg${directives}`
        )
      ).default
    );
  console.log(images);
  return images;
};
*/

export const sources = async () => [
  (await import(`$lib/assets/images/gallery/00.jpg?webp`)).default,
  (await import(`$lib/assets/images/gallery/01.jpg?webp`)).default,
  (await import(`$lib/assets/images/gallery/02.jpg?webp`)).default,
  (await import(`$lib/assets/images/gallery/03.jpg?webp`)).default,
  (await import(`$lib/assets/images/gallery/04.jpg?webp`)).default,
  (await import(`$lib/assets/images/gallery/05.jpg?webp`)).default,
  (await import(`$lib/assets/images/gallery/06.jpg?webp`)).default,
  (await import(`$lib/assets/images/gallery/07.jpg?webp`)).default,
  (await import(`$lib/assets/images/gallery/08.jpg?webp`)).default,
  (await import(`$lib/assets/images/gallery/09.jpg?webp`)).default,
  (await import(`$lib/assets/images/gallery/10.jpg?webp`)).default,
  (await import(`$lib/assets/images/gallery/11.jpg?webp`)).default,
  (await import(`$lib/assets/images/gallery/12.jpg?webp`)).default,
  (await import(`$lib/assets/images/gallery/13.jpg?webp`)).default,
  (await import(`$lib/assets/images/gallery/14.jpg?webp`)).default,
  (await import(`$lib/assets/images/gallery/15.jpg?webp`)).default,
  (await import(`$lib/assets/images/gallery/16.jpg?webp`)).default,
  (await import(`$lib/assets/images/gallery/17.jpg?webp`)).default,
  (await import(`$lib/assets/images/gallery/18.jpg?webp`)).default
];

export const screens = async () => [
  (await import(`$lib/assets/images/gallery/00.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/gallery/01.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/gallery/02.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/gallery/03.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/gallery/04.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/gallery/05.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/gallery/06.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/gallery/07.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/gallery/08.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/gallery/09.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/gallery/10.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/gallery/11.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/gallery/12.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/gallery/13.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/gallery/14.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/gallery/15.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/gallery/16.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/gallery/17.jpg?w=320&h=180&webp`)).default,
  (await import(`$lib/assets/images/gallery/18.jpg?w=320&h=180&webp`)).default
];

export const squares = async () => [
  (await import(`$lib/assets/images/gallery/00.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/gallery/01.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/gallery/02.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/gallery/03.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/gallery/04.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/gallery/05.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/gallery/06.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/gallery/07.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/gallery/08.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/gallery/09.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/gallery/10.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/gallery/11.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/gallery/12.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/gallery/13.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/gallery/14.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/gallery/15.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/gallery/16.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/gallery/17.jpg?w=320&h=320&webp`)).default,
  (await import(`$lib/assets/images/gallery/18.jpg?w=320&h=320&webp`)).default
];
