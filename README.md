# GAME Telegram Example

This repository is a minimal fork of the GAME SDK that keeps only the core library and the Telegram plugin.
It demonstrates how to run the example located at `plugins/telegramPlugin/src/example.ts`.

## Running the example

1. install dependencies for the root package and the Telegram plugin:
   ```bash
   npm install
   (cd plugins/telegramPlugin && npm install)
   ```
2. build both packages so the TypeScript sources are compiled:
   ```bash
   npm run tsup
   (cd plugins/telegramPlugin && npm run tsup)
   ```
3. edit `plugins/telegramPlugin/src/example.ts` and replace the placeholders
   `<API_TOKEN>` and `<BOT_TOKEN>` with your own credentials.
4. finally run the example with ts-node:
   ```bash
   npx ts-node plugins/telegramPlugin/src/example.ts
   ```
