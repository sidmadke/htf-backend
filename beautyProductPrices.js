const scrapeAjioPrice = require('./ajioScraper');
const scrapeAmazonPrice = require('./amazonScraper');
const scrapeFlipkartPrice = require('./flipkartScraper');
const scrapeMyntraPrice = require('./myntraScraper');
const scrapeNykaaProductPrice = require('./nykaaScraper')

async function beautyProductPrices(productName) {
    try {
        const [ajioPrice, amazonPrice, flipkartPrice, myntraPrice, nykaaPrice] = await Promise.all([
            scrapeAjioPrice(productName),
            scrapeAmazonPrice(productName),
            scrapeFlipkartPrice(productName),
            scrapeMyntraPrice(productName),
            scrapeNykaaProductPrice(productName)
        ]);

        const ans = [
            ajioPrice,
            amazonPrice,
            flipkartPrice,
            myntraPrice,
            nykaaPrice
        ];

        console.log(ans)
        return ans;
    } catch (error) {
        console.error('Error fetching beauty product prices:', error);
        return null;
    }
}
// beautyProductPrices("Eyeliner")
module.exports = beautyProductPrices;