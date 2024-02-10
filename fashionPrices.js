const scrapeAjioPrice = require('./ajioScraper');
const scrapeAmazonPrice = require('./amazonScraper');
const scrapeFlipkartPrice = require('./flipkartScraper');
const scrapeMyntraPrice = require('./myntraScraper');

async function fashionPrices(productName) {
    try {
        const [ajioPrice, amazonPrice, flipkartPrice,myntraPrice] = await Promise.all([
            scrapeAjioPrice(productName),
            scrapeAmazonPrice(productName),
            scrapeFlipkartPrice(productName),
            scrapeMyntraPrice(productName)
        ]);

        const ans = [
            ajioPrice,
            amazonPrice,
            flipkartPrice,
            myntraPrice
        ];

        console.log(ans)
        return ans;
    } catch (error) {
        console.error('Error fetching fashion related prices:', error);
        return null;
    }
}

module.exports = fashionPrices;