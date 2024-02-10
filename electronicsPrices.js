const scrapeAmazonPrice = require('./amazonScraper');
const scrapeFlipkartPrice = require('./flipkartScraper');

async function electronicsPrices(productName) {
    try {
        const [amazonPrice, flipkartPrice] = await Promise.all([
            scrapeAmazonPrice(productName),
            scrapeFlipkartPrice(productName)
        ]);

        const ans = [
            amazonPrice,
            flipkartPrice
        ];

        console.log(ans)
        return ans;
    } catch (error) {
        console.error('Error fetching electronics prices:', error);
        return null;
    }
}

module.exports = electronicsPrices
// electronicsPrices("vivo t2 5g")