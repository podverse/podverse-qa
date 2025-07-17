import { faker } from '@faker-js/faker';

function createFeeds(count: number = 5) {
  const feeds = Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    title: faker.music.songName(),
    author: faker.person.fullName(),
    description: faker.lorem.paragraph(),
    url: faker.internet.url(),
    image: faker.image.urlPicsumPhotos(),
  }));
  console.log('Generated feeds:', feeds);
}

createFeeds();
