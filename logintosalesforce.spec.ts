import { chromium, test } from "@playwright/test";

test('Test to launch the salesforce application',async()=>{
    const browsers=await chromium.launch({headless:false});
    const context=await browsers.newContext();
    const page=await context.newPage();
    await page.goto('https://login.salesforce.com/');
    const url=page.url();
    const title=await page.title();
    console.log("The URL of the page is",{url});
    console.log('The Title of the page is', {title});
    page.close();
    context.close();
    browsers.close();
})
