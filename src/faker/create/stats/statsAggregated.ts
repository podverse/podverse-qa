/* eslint-disable @typescript-eslint/no-explicit-any */

import { faker } from '@faker-js/faker';
import { AppDataSourceReadWrite, Channel, Clip, Item, Playlist, StatsAggregatedChannel, StatsAggregatedClip, StatsAggregatedItem, StatsAggregatedPlaylist } from 'podverse-orm';

export default async function createStatsAggregated() {
  await createStatsAggregatedChannel();
  await createStatsAggregatedItem();
  await createStatsAggregatedPlaylist();
  await createStatsAggregatedClip();
}

type EntityType = Channel | Item | Playlist | Clip;
type StatsType = StatsAggregatedChannel
  | StatsAggregatedItem
  | StatsAggregatedPlaylist
  | StatsAggregatedClip;

interface StatsConfig<T extends EntityType, S extends StatsType> {
  entityRepo: any;
  statsRepo: any;
  entityKey: keyof S;
  entityIdKey: keyof S;
  entityName: string;
  statsName: string;
  getEntityId: (entity: T) => any;
  getEntityTitle: (entity: T) => string;
  StatsClass: new () => S;
}

async function createStatsAggregatedGeneric<T extends EntityType, S extends StatsType>(config: StatsConfig<T, S>) {
  const entities = await config.entityRepo.find();
  if (!entities.length) {
    console.warn(`No ${config.entityName}s found.`);
    return;
  }
  for (let i = 0; i < entities.length; i++) {
    const entity = entities[i];
    let stats = await config.statsRepo.findOne({ where: { [config.entityIdKey]: config.getEntityId(entity) } });
    let statsInstance: S;
    if (stats) {
      stats[config.entityKey] = entity;
      stats[config.entityIdKey] = config.getEntityId(entity);
      statsInstance = stats;
    } else {
      statsInstance = new config.StatsClass();
      statsInstance[config.entityKey] = entity;
      statsInstance[config.entityIdKey] = config.getEntityId(entity);
    }
    statsInstance['day_current_count'] = faker.number.int({ min: 0, max: 1000 });
    for (let d = 1; d <= 8; d++) {
      (statsInstance as any)[`day_${d}_count`] = faker.number.int({ min: 0, max: 1000 });
    }
    statsInstance['week_current_count'] = faker.number.int({ min: 0, max: 5000 });
    for (let w = 1; w <= 4; w++) {
      (statsInstance as any)[`week_${w}_count`] = faker.number.int({ min: 0, max: 5000 });
    }
    statsInstance['month_current_count'] = faker.number.int({ min: 0, max: 20000 });
    statsInstance['month_1_count'] = faker.number.int({ min: 0, max: 20000 });
    statsInstance['all_time_count'] = faker.number.int({ min: 0, max: 100000 });
    await config.statsRepo.save(statsInstance);
  }
}

async function createStatsAggregatedChannel() {
  await createStatsAggregatedGeneric<Channel, StatsAggregatedChannel>({
    entityRepo: AppDataSourceReadWrite.getRepository(Channel),
    statsRepo: AppDataSourceReadWrite.getRepository(StatsAggregatedChannel),
    entityKey: 'channel',
    entityIdKey: 'channel_id',
    entityName: 'channel',
    statsName: 'stats_aggregated_channel',
    getEntityId: (c) => c.id,
    getEntityTitle: (c) => c.title ?? '',
    StatsClass: StatsAggregatedChannel,
  });
}

async function createStatsAggregatedItem() {
  await createStatsAggregatedGeneric<Item, StatsAggregatedItem>({
    entityRepo: AppDataSourceReadWrite.getRepository(Item),
    statsRepo: AppDataSourceReadWrite.getRepository(StatsAggregatedItem),
    entityKey: 'item',
    entityIdKey: 'item_id',
    entityName: 'item',
    statsName: 'stats_aggregated_item',
    getEntityId: (i) => i.id,
    getEntityTitle: (i) => i.title ?? '',
    StatsClass: StatsAggregatedItem,
  });
}

async function createStatsAggregatedPlaylist() {
  await createStatsAggregatedGeneric<Playlist, StatsAggregatedPlaylist>({
    entityRepo: AppDataSourceReadWrite.getRepository(Playlist),
    statsRepo: AppDataSourceReadWrite.getRepository(StatsAggregatedPlaylist),
    entityKey: 'playlist',
    entityIdKey: 'playlist_id',
    entityName: 'playlist',
    statsName: 'stats_aggregated_playlist',
    getEntityId: (p) => p.id,
    getEntityTitle: (p) => p.title ?? '',
    StatsClass: StatsAggregatedPlaylist,
  });
}

async function createStatsAggregatedClip() {
  await createStatsAggregatedGeneric<Clip, StatsAggregatedClip>({
    entityRepo: AppDataSourceReadWrite.getRepository(Clip),
    statsRepo: AppDataSourceReadWrite.getRepository(StatsAggregatedClip),
    entityKey: 'clip',
    entityIdKey: 'clip_id',
    entityName: 'clip',
    statsName: 'stats_aggregated_clip',
    getEntityId: (c) => c.id,
    getEntityTitle: (c) => c.title ?? '',
    StatsClass: StatsAggregatedClip
  });
}
