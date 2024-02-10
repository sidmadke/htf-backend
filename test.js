const scrapeAmazonProductPrice = require('./amazonScraper');
const scrapeFlipkartProductPrice = require('./flipkartScraper');
const scrapeMyntraProductPrice = require('./myntraScraper');

(async () => {
  const productName = 'nike tshirt'; // Replace with the desired product name
  
  const amazonPrice = await scrapeAmazonProductPrice(productName);
  console.log('Amazon Price:', amazonPrice);

  const flipkartPrice = await scrapeFlipkartProductPrice(productName);
  console.log('Flipkart Price:', flipkartPrice);

  const myntraPrice = await scrapeMyntraProductPrice(productName);
  console.log('Myntra Price:', myntraPrice);
})();
