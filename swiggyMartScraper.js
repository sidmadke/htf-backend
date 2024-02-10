const { chromium } = require('playwright');

async function scrapeSwiggyInstamartPrice(productName) {
    try {
        const browser = await chromium.launch();
        console.log(1);
        const context = await browser.newContext();
        console.log(2);
        const page = await context.newPage();
        console.log(3);
        await page.goto(`https://www.swiggy.com/instamart/search?custom_back=true&query=${productName}`); // Update URL to Swiggy Instamart
        console.log(4);

        await new Promise((resolve) => setTimeout(resolve, 5000)).then(() => {
            console.log("5 seconds passed");
        });
        const prices = await page.evaluate(() => {
            const rupeeElements = document.evaluate(
                '//div//div[contains(@class, "_2Pf8a")]',
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
            console.log(priceList);
            return priceList;
        });
        const sortedPrices = prices.sort((a, b) => a - b); // Sort the prices in ascending order
        console.log("Sorted Prices from Mart: ", sortedPrices);
        console.log("Lowest Price from Mart: ", sortedPrices[0]);
        await browser.close();
        const finalPrice=parseInt(sortedPrices[0])
        return finalPrice
    } catch (error) {
        console.error("Error navigating to Swiggy Instamart:", error);
        return null;
    }
}

module.exports = scrapeSwiggyInstamartPrice;

