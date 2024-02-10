const scrapeSwiggyPrice = require('./swiggyScraper');

async function foodPrices(productName) {
    try {
        const [swiggyPrice] = await Promise.all([
            scrapeSwiggyPrice(productName)
        ]);
        const ans = [
            swiggyPrice
        ];
        console.log(ans)
        return ans;
    } catch (error) {
        console.error('Error fetching food prices:', error);
        return null;
    }
}

module.exports = foodPrices