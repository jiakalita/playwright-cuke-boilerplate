import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  use: {
    headless: true,
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
  },
};
export default config;
