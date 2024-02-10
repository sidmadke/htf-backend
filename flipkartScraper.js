// flipkartScraper.js
const { chromium } = require('playwright');

async function scrapeFlipkartProductPrice(productName) {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(`https://www.flipkart.com/search?q=${productName}`);
  const priceString = await page.$eval('._30jeq3', el => el.textContent);
  const price = parseInt(priceString.replace(/[^\d]/g, ''), 10);
  await browser.close();
  return price;
}

module.exports = scrapeFlipkartProductPrice;
