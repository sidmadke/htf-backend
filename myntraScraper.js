// myntraScraper.js
const { firefox } = require('playwright');

async function scrapeMyntraProductPrice(productName) {
    try {
        const browser = await firefox.launch();
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto(`https://www.myntra.com/${productName}`);
      const priceString = await page.$eval('.product-discountedPrice', el => el.textContent);
      const price = parseInt(priceString.replace(/[^\d]/g, ''), 10);
      await browser.close();
      const finalPrice=parseInt(price)
      return finalPrice;
    } catch (error) {
      console.error('Error navigating to Myntra:', error);
      return null;
    }
  }
  

module.exports = scrapeMyntraProductPrice;

