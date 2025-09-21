import { AccountService, PlaylistService } from 'podverse-orm';
import { MediumEnum, SharableStatusEnum } from 'podverse-helpers';
import { FAKER } from '../../constants';

export default async function () {
  const accountService = new AccountService();
  const playlistService = new PlaylistService();

  const mediums = [
    MediumEnum.Podcast,
    MediumEnum.Music,
    MediumEnum.Video,
    MediumEnum.Mixed
  ];

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
        const medium = mediums[i % mediums.length];

        const sharable_status = sharableStatuses[i % sharableStatuses.length];
        await playlistService.create(createdAccount.id, {
          title: `Playlist ${i + 1} for ${acc.email}`,
          description: `Auto-generated playlist #${i + 1}`,
          medium_id: medium,
          sharable_status_id: sharable_status,
          is_default_favorites: false
        });
      }
    } catch (err) {
      console.error(`Error creating account ${acc.email}:`, err);
    }
  }
}
