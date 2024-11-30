import { Given, When, Then,  } from '@cucumber/cucumber';
import { Browser, Page, chromium, expect } from '@playwright/test';
let page: Page;
let browser: Browser;

       
        Given('User navigates to the application', async function () {
             browser = await chromium.launch({ headless: false });
              page = await browser.newPage();
          await page.goto('https://www.saucedemo.com/');
          console.log('Navigated to the application');
         });
    
        Given('User enters the username as {string}', async function (username) {
          await page.locator("//input[@id='user-name']").fill(username);
          console.log(username);

        });
        Given('User enters the password as {string}', async function (password) {
          await page.locator('//input[@id="password"]').fill(password);
          console.log(password);
         });
         When('User clicks on the login button', async function () {
         await page.locator('//input[@id="login-button"]').click();
         });
          Then('User is logged in successfully', async function () {
            const title = await page.locator('//div[@class="app_logo"]').textContent();
            console.log(title);
            expect(title).toEqual('Swag Labs');
            await browser.close();
            await page.close();

         });
       
         Then('Login should fail', async function () {
           const errorMessage = await page.locator('h3[data-test="error"]')
           await errorMessage.isVisible();
           const errorText = await errorMessage.textContent();
           console.log(errorText);
           await expect(errorMessage).toBeVisible();
            await browser.close();
            await page.close();
         });
    