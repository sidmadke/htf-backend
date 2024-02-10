const scrapeAmazonPrice = require('./amazonScraper');
const scrapeFlipkartPrice = require('./flipkartScraper');
const scrapeSwiggyMartPrice = require('./swiggyMartScraper');
const scrapeZeptoPrice = require('./zeptoScraper');

async function groceryPrices(productName) {
    try {
        const [amazonPrice, flipkartPrice, swiggyMartPrice, zeptoPrice] = await Promise.all([
            scrapeAmazonPrice(productName),
            scrapeFlipkartPrice(productName),
            scrapeSwiggyMartPrice(productName),
            scrapeZeptoPrice(productName)
        ]);

        const ans = [
            amazonPrice,
            flipkartPrice,
            swiggyMartPrice,
            zeptoPrice
        ];

        console.log(ans)
        return ans;
    } catch (error) {
        console.error('Error fetching grocery prices:', error);
        return null;
    }
}

module.exports = groceryPrices
