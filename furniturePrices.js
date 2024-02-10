const scrapeAjioPrice = require('./ajioScraper')
const scrapeAmazonPrice = require('./amazonScraper');
const scrapeFlipkartPrice = require('./flipkartScraper');

async function furniturePrices(productName) {
    try {
        const [ajioPrice, amazonPrice, flipkartPrice] = await Promise.all([
            scrapeAjioPrice(productName),
            scrapeAmazonPrice(productName),
            scrapeFlipkartPrice(productName)
        ]);

        const ans = [
            ajioPrice,
            amazonPrice,
            flipkartPrice
        ];

        console.log(ans)
        return ans;
    } catch (error) {
        console.error('Error fetching furniture prices:', error);
        return null;
    }
}

module.exports = furniturePrices
