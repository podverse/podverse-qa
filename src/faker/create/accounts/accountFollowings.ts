import { AccountService, ChannelService, AccountFollowingChannelService, PlaylistService, AccountFollowingPlaylistService } from 'podverse-orm';

export default async function createAccountFollowings() {
  await createAccountChannelFollowings();
  await createAccountPlaylistFollowings();
}

async function createAccountChannelFollowings() {
  const accountService = new AccountService();
  const channelService = new ChannelService();
  const accountFollowingChannelService = new AccountFollowingChannelService();

  const emails = [
    "basic-valid@example.com",
    "basic-expired@example.com",
    "trial-valid@example.com",
    "trial-expired@example.com"
  ];

  const medium_id = null;
  const category_id = null;
  const channels = await channelService.getMany({ take: 25 }, medium_id, category_id);
  if (!channels.length) throw new Error('No channels found');

  for (const email of emails) {
    const account = await accountService.getByEmail(email, { relations: ['account_credentials'] });
    if (!account) {
      console.warn(`Account not found for email: ${email}`);
      continue;
    }
    for (const channel of channels) {
      await accountFollowingChannelService.followChannel(account.id, channel.id_text);
    }
  }
}

async function createAccountPlaylistFollowings() {
  const accountService = new AccountService();
  const playlistService = new PlaylistService();
  const accountFollowingPlaylistService = new AccountFollowingPlaylistService();

  const emails = [
    "basic-valid@example.com",
    "basic-expired@example.com",
    "trial-valid@example.com",
    "trial-expired@example.com"
  ];

  const playlists = await playlistService.getManyPublic({ take: 25 });
  if (!playlists.length) throw new Error('No playlists found');

  for (const email of emails) {
    const account = await accountService.getByEmail(email, { relations: ['account_credentials'] });
    if (!account) {
      console.warn(`Account not found for email: ${email}`);
      continue;
    }

    for (const playlist of playlists) {
      await accountFollowingPlaylistService.followPlaylist(account.id, playlist.id_text);
    }
  }
}
