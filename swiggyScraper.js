// Iterate over the found elements and access their properties or modify them as needed

const { chromium } = require("playwright");

async function scrapeSwiggyFoodPrice(foodName) {
    try {
        const browser = await chromium.launch();
        console.log(1);
        const context = await browser.newContext();
        console.log(2);
        const page = await context.newPage();
        console.log(3);
        await page.goto(`https://www.swiggy.com/search?query=${foodName}`); // Increase timeout to 60 seconds
        console.log(4);

        await new Promise((resolve) => setTimeout(resolve, 5000)).then(() => {
            console.log("5 seconds passed");
        });
        const prices = await page.evaluate(() => {
            console.log(5);
            const rupeeElements = document.evaluate(
                '//div//span[contains(@class, "rupee")]',
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
        console.log(6);
        var ele = prices.sort(function (a, b) { return a - b });
        console.log(ele)
        console.log(ele[0]);
        await browser.close();
        return ele[0]
    } catch (error) {
        console.error("Error navigating to Swiggy:", error);
        return null;
    }
}

module.exports = scrapeSwiggyFoodPrice;