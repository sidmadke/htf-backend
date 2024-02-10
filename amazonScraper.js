const { chromium } = require('playwright');

async function scrapeAmazonProductPrice(productName) {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(`https://www.amazon.in/s?k=${productName}`);
  const priceString = await page.$eval('.a-price span.a-offscreen', el => el.textContent);
  const price = parseInt(priceString.replace(/[^\d]/g, ''), 10);

  await browser.close();

  return price;
}

module.exports = scrapeAmazonProductPrice;
