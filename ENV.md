# Environment Variables

## Overview

The `podverse-qa` application is a QA/testing tool that uses environment variables for configuration. This repo does not have a dedicated validation file, but it uses environment variables for logging, user agent configuration, and Podcast Index API access.

Environment variables are loaded from environment-specific files (`.env.local`, `.env.alpha`, or `.env` for production) based on the command-line argument passed to the faker script.

**Note**: This is a testing/QA tool, not a production application. Environment variables are used for configuring test data generation and API access.

## General Configuration

- **`USER_AGENT`** (Required)
  - Format: `BrandName Bot Environment/AppName/Version`
  - Must include "Bot" in the first part (before the first slash)
  - Example: `Podverse Bot Local/QA/5`
  - Used for external API requests

- **`LOG_LEVEL`** (Optional) - Logging level (default: `info`)
  - Valid values: `error`, `warn`, `info`, `debug`, `verbose`, `silly`, `silent`

- **`LOG_DIR`** (Optional) - Log directory (default: `logs`)

- **`LOG_TIMER`** (Optional) - Enable log timers (default: `false`)
  - Set to `"true"` to enable

## Podcast Index

- **`PODCAST_INDEX_AUTH_KEY`** (Required) - Podcast Index API authentication key
- **`PODCAST_INDEX_BASE_URL`** (Required) - Podcast Index API base URL
- **`PODCAST_INDEX_SECRET_KEY`** (Required) - Podcast Index API secret key

## Environment File Loading

The faker script loads environment variables based on the command-line argument:

- `local` - Loads from `.env.local`
- `alpha` - Loads from `.env.alpha`
- `production` - Loads from `.env`

Example usage:
```bash
npm run faker local create-accounts
npm run faker alpha create-feeds
```

## Important Notes

- **Testing tool**: This is a QA/testing tool, not a production application.
- **Environment-specific configs**: Different environment files should be used for different testing environments.
- **No validation**: This repo does not perform validation of environment variables. Ensure all required variables are set before running commands.

## Adding New Environment Variables

When adding a new environment variable:

1. **Add to `src/config/index.ts`**:
   - Add the variable with appropriate default value

2. **Update this file**:
   - Add the variable to the appropriate section above
   - Document any special requirements (format, type)

3. **Update environment files** (`.env.local`, `.env.alpha`, `.env`):
   - Add the variable with a comment explaining its purpose
