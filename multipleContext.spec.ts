import { chromium, firefox, test } from "@playwright/test";

test('Test to Open redbus and flipkart in multiple instance',async()=>{
    const browsers1=await chromium.launch({headless:false,channel:'msedge'});
      
    const context1=await browsers1.newContext();
    const page1=await context1.newPage();
   
    await page1.goto('https://www.redbus.in/');
    const url1=page1.url();
    const title1=await page1.title();
    console.log("The URL of the page is",{url1});
    console.log('The Title of the page is', {title1});
    const browsers2=await firefox.launch({headless:false});
    const context2=await browsers2.newContext();
    const page2=await context2.newPage();
    await page2.goto('https://www.flipkart.com/');
    const url2=page2.url();
    const title2=await page2.title();
    console.log("The URL of the page is",{url2});
    console.log('The Title of the page is', {title2});
    page2.close();
    context2.close();
    browsers2.close();
    page1.close();
    context1.close();
    browsers1.close();
})