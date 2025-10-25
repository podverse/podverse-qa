import { AccountService, ClipService, ItemService, ItemSoundbiteService,
  QueueResourceService, QueueService} from 'podverse-orm';
import { FAKER } from '../../constants';

export default async function () {
  const accountService = new AccountService();
  const clipService = new ClipService();
  const itemService = new ItemService();
  const itemSoundbiteService = new ItemSoundbiteService();
  const queueService = new QueueService();
  const queueResourceService = new QueueResourceService();
  
  for (const acc of FAKER.ACCOUNTS) {
    try {
      const createdAccount = await accountService.getByEmail(acc.email);
      if (!createdAccount) throw new Error('Account not found after creation');

      const queues = await queueService.getAllPrivate(createdAccount.id);
      for (const queue of queues) {
        if (queue) {
          for (let i = 0; i < 50; i++) {
            try {
              if (i % 3 === 0) {
                const item = await itemService.getRandomItem(queue.medium_id);
                if (item) {
                  await queueResourceService.addItemToQueueNext(queue.id_text, item.id_text);
                }
              } else if (i % 3 === 1) {
                const clip = await clipService.getRandomClip(queue.medium_id);
                if (clip) {
                  await queueResourceService.addClipToQueueNext(queue.id_text, clip.id_text);
                }
              } else {
                const itemSoundbite = await itemSoundbiteService.getRandomItemSoundbite(queue.medium_id);
                if (itemSoundbite) {
                  await queueResourceService.addItemSoundbiteToQueueNext(queue.id_text, itemSoundbite.id_text);
                }
              }
            } catch (err) {
              console.log('Error adding to queue:', err);
            }
          }

          for (let i = 0; i < 50; i++) {
            try {
              if (i % 3 === 0) {
                const item = await itemService.getRandomItem(queue.medium_id);
                if (item) {
                  await queueResourceService.addItemToHistory(
                    queue.id_text,
                    item.id_text,
                    {
                      playback_position: (Math.floor(Math.random() * 600)).toString(),
                      media_file_duration: (600 + Math.floor(Math.random() * 600)).toString(),
                      completed: Math.random() < 0.5
                    }
                  );
                }
              } else if (i % 3 === 1) {
                const clip = await clipService.getRandomClip(queue.medium_id);
                if (clip) {
                  await queueResourceService.addClipToHistory(
                    queue.id_text,
                    clip.id_text,
                    {
                      playback_position: (Math.floor(Math.random() * 300)).toString(),
                      media_file_duration: (300 + Math.floor(Math.random() * 300)).toString(),
                      completed: Math.random() < 0.5
                    }
                  );
                }
              } else {
                const itemSoundbite = await itemSoundbiteService.getRandomItemSoundbite(queue.medium_id);
                if (itemSoundbite) {
                  await queueResourceService.addItemSoundbiteToHistory(
                    queue.id_text,
                    itemSoundbite.id_text,
                    {
                      playback_position: (Math.floor(Math.random() * 120)).toString(),
                      media_file_duration: (120 + Math.floor(Math.random() * 120)).toString(),
                      completed: Math.random() < 0.5
                    }
                  );
                }
              } 
            } catch (err) {
              console.log('Error adding to history:', err);
            }     
          }
        }
      }
    } catch (err) {
      console.error(`Error creating queues:`, err);
    }
  }
}
