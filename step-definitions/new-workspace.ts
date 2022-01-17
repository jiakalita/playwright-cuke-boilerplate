import { Given, When, Then } from '@cucumber/cucumber';
// import expect from 'expect';
import { chromium } from 'playwright';
import { OurWorld } from '../types';


Given('User is logged into dashboard', async function (this: OurWorld) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  // const page = this.page!;
  // console.log(page);
  // const browser = await chromium.launch({
  //   headless: false,
  // });
  // const page = await browser.newPage();
  this.page.goto("https://playwright.dev")
  console.log('started new workspace tests..');

  // const [popup] = await Promise.all([
  //   page.waitForEvent('popup', { timeout: 3000 }),
  //   page.click('text=Continue with Google'),
  // ]);
  // await popup.waitForLoadState('load');
  // await popup.waitForSelector('input[name="identifier"]', {
  //   state: 'visible',
  //   timeout: 10000,
  // });
  // await popup.fill('input[name="identifier"]', 'qauser@realtimeskills.org');
  // await popup.click('text=Next');
  // console.log('popup password');
  // await popup.waitForSelector('input[name="password"]', {
  //   state: 'visible',
  //   timeout: 10000,
  // });
  // await popup.fill('input[name="password"]', 'Qauser@123');
  // await popup.click('text=Next');
  // // await page?.goto(config.BASE_URL);
  // await page.waitForURL(`https://app.oslash.com/install`);
  // await browser.close();
});

When('Create new team workspace {string} with the following particulars', function (string, dataTable) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
Then('New team workspace is created successfully', async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
Then('toast message appears', async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('create new personal workspace', async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
Then('New personal workspace is created successfully', async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
