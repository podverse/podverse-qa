if (process.env.NODE_ENV !== 'production') {
  require('@dotenvx/dotenvx').config({ path: '.env' });
}
import { AppDataSourceRead, AppDataSourceReadWrite } from "podverse-orm";
// Entry point for running faker scripts from the command line
const script = process.argv[2];
if (!script) {
  console.error("Please specify a script name, e.g. npm run faker createFeeds");
  process.exit(1);
}

(async () => {
  try {
    await AppDataSourceRead.initialize();
    await AppDataSourceReadWrite.initialize();
    // Use dynamic import for TypeScript files to ensure compatibility
    const { default: defaultFunc } = await import(`./${script}.ts`);
    await defaultFunc();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
