// testSwiggyScraper.js
const scrapeSwiggyFoodPrice = require('./swiggyScraper');

async function testSwiggyScraper() {
  const foodName = 'pizza'; // Sample food name to test
  console.log(`Fetching price of ${foodName} from Swiggy...`);
  
  const price = await scrapeSwiggyFoodPrice(foodName);
  console.log(price);
  
  if (price) {
    console.log(`Price of ${foodName} on Swiggy: ${price}`);
  } else {
    console.log(`Failed to fetch price of ${foodName} from Swiggy.`);
  }
}

testSwiggyScraper();
