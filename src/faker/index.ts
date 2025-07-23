const envArg = process.argv[2];
const script = process.argv[3];

if (!envArg) {
  console.error("Please specify an environment, e.g. local or alpha");
  process.exit(1);
}

const envPathMap: Record<string, string> = {
  local: '.env.local',
  alpha: '.env.alpha',
  production: '.env'
};

const envPath = envPathMap[envArg];

if (!envPath) {
  throw new Error(`Unknown environment: ${envArg}`);
}

const fs = require('fs');
if (!fs.existsSync(envPath)) {
  throw new Error(`Config file not found: ${envPath}`);
}

require('@dotenvx/dotenvx').config({ path: envPath });

import { AppDataSourceRead, AppDataSourceReadWrite } from "podverse-orm";

if (!script) {
  console.error("Please specify a script name, e.g. npm run faker local createFeeds");
  process.exit(1);
}

(async () => {
  try {
    await AppDataSourceRead.initialize();
    await AppDataSourceReadWrite.initialize();
    const { default: defaultFunc } = await import(`./${script}.ts`);
    await defaultFunc();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
