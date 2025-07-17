import { AccountMembershipEnum } from 'podverse-helpers';
import { AccountService, AccountMembershipStatusService } from 'podverse-orm';

export default async function () {
  const accountService = new AccountService();
  const accountMembershipStatusService = new AccountMembershipStatusService();

  const accounts = [
    { email: 'basic-valid@example.com', password: 'Test!1Aa' },
    { email: 'trial-valid@example.com', password: 'Test!1Aa' },
    { email: 'trial-expired@example.com', password: 'Test!1Aa' },
    { email: 'basic-expired@example.com', password: 'Test!1Aa' }
  ];

  for (const acc of accounts) {
    try {
      const qaVerified = true;
      await accountService.create(acc, qaVerified);

      const createdAccount = await accountService.getByEmail(acc.email);
      if (!createdAccount) throw new Error('Account not found after creation');

      let membership_expires_at = new Date();
      let membership_type;
      if (acc.email === 'basic-valid@example.com' || acc.email === 'trial-valid@example.com') {
        membership_expires_at.setFullYear(membership_expires_at.getFullYear() + 5);
        membership_type = AccountMembershipEnum.Trial;
      } else if (acc.email === 'trial-expired@example.com') {
        membership_expires_at.setFullYear(membership_expires_at.getFullYear() - 5);
        membership_type = AccountMembershipEnum.Trial;
      } else if (acc.email === 'basic-expired@example.com') {
        membership_expires_at.setFullYear(membership_expires_at.getFullYear() - 5);
        membership_type = AccountMembershipEnum.Basic;
      }

      if (membership_type !== undefined) {
        await accountMembershipStatusService.update(createdAccount, {
          account_membership_id: membership_type,
          membership_expires_at
        });
        console.log(`Created account: ${acc.email} with membership expiring ${membership_expires_at}`);
      } else {
        console.warn(`No membership type set for account: ${acc.email}`);
      }
    } catch (err) {
      console.error(`Error creating account ${acc.email}:`, err);
    }
  }
}
