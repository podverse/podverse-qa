import { faker } from '@faker-js/faker';
import { AppDataSourceReadWrite, Channel, StatsAggregatedChannel } from 'podverse-orm';

export default async function createStatsAggregatedChannel() {
  const channelRepo = AppDataSourceReadWrite.getRepository(Channel);
  const channels = await channelRepo.find();
  if (!channels.length) {
    console.log('No channels found.');
    return;
  }
  const statsRepo = AppDataSourceReadWrite.getRepository(StatsAggregatedChannel);
  for (let i = 0; i < channels.length; i++) {
    const channel = channels[i];
    let stats = await statsRepo.findOne({ where: { channel_id: channel.id } });
    let statsInstance: StatsAggregatedChannel;
    if (stats) {
      stats.channel = channel;
      stats.channel_id = channel.id;
      statsInstance = stats;
    } else {
      statsInstance = new StatsAggregatedChannel();
      statsInstance.channel = channel;
      statsInstance.channel_id = channel.id;
    }
    statsInstance.day_current_count = faker.number.int({ min: 0, max: 1000 });
    statsInstance.day_1_count = faker.number.int({ min: 0, max: 1000 });
    statsInstance.day_2_count = faker.number.int({ min: 0, max: 1000 });
    statsInstance.day_3_count = faker.number.int({ min: 0, max: 1000 });
    statsInstance.day_4_count = faker.number.int({ min: 0, max: 1000 });
    statsInstance.day_5_count = faker.number.int({ min: 0, max: 1000 });
    statsInstance.day_6_count = faker.number.int({ min: 0, max: 1000 });
    statsInstance.day_7_count = faker.number.int({ min: 0, max: 1000 });
    statsInstance.day_8_count = faker.number.int({ min: 0, max: 1000 });
    statsInstance.week_current_count = faker.number.int({ min: 0, max: 5000 });
    statsInstance.week_1_count = faker.number.int({ min: 0, max: 5000 });
    statsInstance.week_2_count = faker.number.int({ min: 0, max: 5000 });
    statsInstance.week_3_count = faker.number.int({ min: 0, max: 5000 });
    statsInstance.week_4_count = faker.number.int({ min: 0, max: 5000 });
    statsInstance.month_current_count = faker.number.int({ min: 0, max: 20000 });
    statsInstance.month_1_count = faker.number.int({ min: 0, max: 20000 });
    statsInstance.all_time_count = faker.number.int({ min: 0, max: 100000 });
    await statsRepo.save(statsInstance);
    console.log(`Created/updated stats_aggregated_channel row ${i + 1}: ${statsInstance.channel.id}`, statsInstance.channel.title);
  }
}
