import { AccountService, ChannelService, AccountFollowingChannelService } from 'podverse-orm';

export default async function createAccountChannelFollowings() {
  const accountService = new AccountService();
  const channelService = new ChannelService();
  const accountFollowingChannelService = new AccountFollowingChannelService();

  const emails = [
    "basic-valid@example.com",
    "basic-expired@example.com",
    "trial-valid@example.com",
    "trial-expired@example.com"
  ];

  const channels = await channelService.getMany({ take: 25 });
  if (!channels.length) throw new Error('No channels found');

  for (const email of emails) {
    const account = await accountService.getByEmail(email, { relations: ['account_credentials'] });
    if (!account) {
      console.warn(`Account not found for email: ${email}`);
      continue;
    }
    for (const channel of channels) {
      console.log(`Following channel: ${channel.id_text} for account: ${account.id} (${email})`);
      await accountFollowingChannelService.followChannel(account.id, channel.id_text);
    }
  }
}
