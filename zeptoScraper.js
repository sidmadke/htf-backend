const { chromium } = require("playwright");

async function scrapeZeptoFoodPrice(foodName) {
    try {
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(`https://zeptonow.com/search?query=${foodName}`);

        await page.waitForLoadState('networkidle');

        const prices = await page.evaluate(() => {
            const priceElements = document.querySelectorAll('.product-card_price-container__NcBb7 .typography_h4__XDrlA');
            const priceList = [];
            priceElements.forEach(element => {
                const priceText = element.textContent.trim().replace('₹', ''); // Remove the '₹' symbol
                const priceNumber = parseFloat(priceText); // Convert the price text to a floating-point number
                priceList.push(priceNumber);
            });
            return priceList;
        });
        
        const sortedPrices = prices.sort((a, b) => a - b); // Sort the prices in ascending order
        console.log("Sorted Prices from Zepto: ", sortedPrices);
        console.log("Lowest Price from Zepto: ", sortedPrices[0]);

        await browser.close();

        // Return the lowest price
        return sortedPrices[0];
    } catch (error) {
        console.error("Error navigating to Zepto Food:", error);
        return null;
    }
}

module.exports = scrapeZeptoFoodPrice;
