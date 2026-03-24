import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  timeout: 30000,
  retries: 0,
  workers: 1, // serial — tests share server state
  use: {
    headless: true,
  },
});
