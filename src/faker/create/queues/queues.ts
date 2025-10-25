import { AccountService, QueueService } from 'podverse-orm';
import { FAKER } from '../../constants';

export default async function () {
  const accountService = new AccountService();
  const queueService = new QueueService();
  
  for (const acc of FAKER.ACCOUNTS) {
    try {
      const createdAccount = await accountService.getByEmail(acc.email);
      if (!createdAccount) throw new Error('Account not found after creation');

      await queueService.getAllPrivate(createdAccount.id);
    } catch (err) {
      console.error(`Error creating queues:`, err);
    }
  }
}
