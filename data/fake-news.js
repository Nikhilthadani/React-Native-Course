import { faker } from "@faker-js/faker";

const generateFakeNews = (limit) => {
  const newsList = [];
  for (let i = 0; i < limit; i++) {
    const title = faker.lorem.sentence({ min: 3, max: 5 });
    const content = faker.lorem.paragraph();
    const date = faker.date.past();
    const id = faker.string.uuid();
    const image = faker.image.urlPicsumPhotos({ width: 200, height: 100 });
    const author = faker.person.fullName();
    newsList.push({ title, content, date, author, id, image });
  }
  return newsList;
};
export default generateFakeNews;
