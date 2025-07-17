import { faker } from '@faker-js/faker';
import { FeedService } from 'podverse-orm';

export default async function () {
  const count = 5;
  const feedService = new FeedService();
  const feeds = Array.from({ length: count }, () => ({
    url: faker.internet.url(),
    podcast_index_id: faker.number.int({ min: 1000, max: 9999 })
  }));

  for (const feedData of feeds) {
    try {
      const createdFeed = await feedService.create(feedData);
      console.log('Created feed:', createdFeed);
    } catch (err) {
      console.error('Error creating feed:', err);
    }
  }
}
