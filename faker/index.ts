// Entry point for running faker scripts from the command line
const script = process.argv[2];
if (!script) {
  console.error("Please specify a script name, e.g. npm run faker createFeeds");
  process.exit(1);
}
try {
  require(`./scripts/${script}.ts`);
} catch (err) {
  console.error(`Script './scripts/${script}.ts' not found or failed to run.`);
  process.exit(1);
}
