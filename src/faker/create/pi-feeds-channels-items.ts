import { parseRSSFeedAndSaveToDatabase } from 'podverse-parser';
import { podcastIndexService } from '../../factories/podcastIndexService';

export default async function createFeedsChannelsItems() {
  const max = 25;
  const { feeds } = await podcastIndexService.trendingGetPodcasts(max);

  for (const feed of feeds) {
    try {
      await parseRSSFeedAndSaveToDatabase(feed.url, feed.id, { forceParse: true });
    } catch (error) {
      console.error(`Error processing feed ${feed.id}:`, error);
    }
  }

  // "podcast" returns no results from PI for some reason...
  const mediums = ["video", "music"];
  for (const medium of mediums) {
    const feeds = await podcastIndexService.podcastsByMedium(medium, 25);
    for (const feed of feeds) {
      try {
        await parseRSSFeedAndSaveToDatabase(feed.url, feed.id, { forceParse: true });
      } catch (error) {
        console.error(`Error processing feed ${feed.id}:`, error);
      }
    }
  }
}
