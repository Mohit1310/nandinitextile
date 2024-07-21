const images = import.meta.glob('../../img/solidTowels/*.{png,jpg,jpeg,svg}', {
  eager: true,
});

export const imageArray = Object.values(images).map((module) => module.default);
