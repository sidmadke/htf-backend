const { firefox } = require('playwright');

async function scrapeNykaaProductPrice(productName) {
    try {
        const browser = await firefox.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(`https://www.nykaa.com/search/result/?q=${productName}`); // Update URL to Nykaa
        const priceString = await page.$eval('.css-111z9ua', el => el.textContent);
        const price = parseInt(priceString.replace(/[^\d]/g, ''), 10);
        await browser.close();
        const finalPrice = parseInt(price)
        console.log("Price from Nyka:" + price)
        return finalPrice;
    } catch (error) {
        console.error('Error navigating to Nykaa:', error);
        return null;
    }
}

module.exports = scrapeNykaaProductPrice;