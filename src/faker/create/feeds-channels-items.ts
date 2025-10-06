import { parseRSSFeedAndSaveToDatabase } from 'podverse-parser';
import { podcastIndexService } from '../../factories/podcastIndexService';

export default async function createFeedsChannelsItems() {
  const max = 30;
  const { feeds } = await podcastIndexService.trendingGetPodcasts(max);

  for (const feed of feeds) {
    try {
      await parseRSSFeedAndSaveToDatabase(feed.url, feed.id);
    } catch (error) {
      console.error(`Error processing feed ${feed.id}:`, error);
    }
  }
}
