import { parseRSSFeedAndSaveToDatabase } from 'podverse-parser';
import { podcastIndexService } from '../../factories/podcastIndexService';

export default async function createQuickFeedsChannelsItems() {
  const podcastIds = [
    7581642 // PVDemo - Podcast // https://podcastindex.org/podcast/7581642
  ];

  for (const podcastId of podcastIds) {
    try {
      const { feed } = await podcastIndexService.podcastGetById(podcastId);
      await parseRSSFeedAndSaveToDatabase(feed.url, podcastId, { forceParse: true });
    } catch (error) {
      console.error(`Error processing podcast ${podcastId}:`, error);
    }
  }
}
