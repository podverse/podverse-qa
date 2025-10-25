import { AccountService, ClipService, ItemService, ItemSoundbiteService,
  PlaylistResourceService, PlaylistService } from 'podverse-orm';
import { FAKER } from '../../constants';

export default async function () {
  const accountService = new AccountService();
  const clipService = new ClipService();
  const itemService = new ItemService();
  const itemSoundbiteService = new ItemSoundbiteService();
  const playlistService = new PlaylistService();
  const playlistResourceService = new PlaylistResourceService();
  
  for (const acc of FAKER.ACCOUNTS) {
    try {
      const createdAccount = await accountService.getByEmail(acc.email);
      if (!createdAccount) throw new Error('Account not found after creation');

      const playlistsResponse = await playlistService.getManyPrivate(createdAccount.id);
      const playlists = playlistsResponse[0];

      for (const playlist of playlists) {
        if (playlist) {
          for (let i = 0; i < 50; i++) {
            if (i % 3 === 0) {
              const item = await itemService.getRandomItem(playlist.medium_id);
              if (item) {
                await playlistResourceService.addItemToPlaylistFirst(playlist.id_text, item.id_text);
              }
            } else if (i % 3 === 1) {
              const clip = await clipService.getRandomClip(playlist.medium_id);
              if (clip) {
                await playlistResourceService.addClipToPlaylistFirst(playlist.id_text, clip.id_text);
              }
            } else {
              const itemSoundbite = await itemSoundbiteService.getRandomItemSoundbite(playlist.medium_id);
              if (itemSoundbite) {
                await playlistResourceService.addItemSoundbiteToPlaylistFirst(playlist.id_text, itemSoundbite.id_text);
              }
            }
          }
        }
      }
    } catch (err) {
      console.error(`Error creating queues:`, err);
    }
  }
}
