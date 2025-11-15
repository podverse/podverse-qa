import { AccountService, ClipService, ItemService } from 'podverse-orm';
import { MediumEnum, SharableStatusEnum } from 'podverse-helpers';
import { FAKER } from '../../constants';

export default async function () {
  const accountService = new AccountService();
  const clipService = new ClipService();
  const itemService = new ItemService();

  const sharableStatuses = [
    SharableStatusEnum.Public,
    SharableStatusEnum.Unlisted,
    SharableStatusEnum.Private
  ];

  for (const acc of FAKER.ACCOUNTS) {
    try {
      const createdAccount = await accountService.getByEmail(acc.email);
      if (!createdAccount) throw new Error('Account not found after creation');

      for (let i = 0; i < 30; i++) {
        const medium_id = i % 2 === 0 ? MediumEnum.Podcast : MediumEnum.Video;
        const item = await itemService.getRandomItem(medium_id);
        
        const maxTime = 600;
        const minDuration = 15;
        const setEndTime = Math.random() < 0.75;
        const start_time = Math.floor(Math.random() * (maxTime - minDuration));
        let end_time: number | undefined = undefined;
        if (setEndTime) {
          const maxEnd = Math.min(start_time + minDuration + Math.floor(Math.random() * (maxTime - start_time - minDuration)), maxTime);
          end_time = Math.max(start_time + minDuration, maxEnd);
        }

        await clipService.create(createdAccount.id, {
          title: `Clip ${i + 1} for ${acc.email} with status ${sharableStatuses[i % sharableStatuses.length]}`,
          description: `Auto-generated clip #${i + 1} for ${acc.email} with status ${sharableStatuses[i % sharableStatuses.length]}`,
          item_id_text: item.id_text,
          sharable_status_id: sharableStatuses[i % sharableStatuses.length],
          start_time: start_time.toString(),
          ...(end_time !== undefined ? { end_time: end_time.toString() } : {})
        });
      }
    } catch (err) {
      console.error(`Error creating clip for account ${acc.email}:`, err);
    }
  }
}
