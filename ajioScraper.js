const { chromium } = require("playwright");

async function scrapeAjioProductPrice(productName) {
  try {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(`https://www.ajio.com/search/?text=${productName}`); // Update URL to Ajio
    await page.waitForSelector('.offer-pricess');
    const prices = await page.evaluate(() => {
      const rupeeElements = document.evaluate(
        '//div//span[contains(@class, "offer-pricess")]',
        document,
        null,
        XPathResult.ANY_TYPE,
        null
      );
      const priceList = [];
      let element;
      while ((element = rupeeElements.iterateNext())) {
        priceList.push(element.textContent.trim());
      }
      return priceList;
    });
    const sortedPrices = prices.sort((a, b) => a - b);
    const lowestPrice = sortedPrices[0];
    const price = parseInt(lowestPrice.replace(/[^\d]/g, ''), 10);
    console.log(price)
    await browser.close();
    console.log(price)
    return price;
  } catch (error) {
    console.error("Error navigating to Ajio:", error);
    return null;
  }
}

module.exports = scrapeAjioProductPrice;