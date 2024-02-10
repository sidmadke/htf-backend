const scrapeZomatoPizzaPrice = require('./zomatoScraper');

(async () => {
  const location = 'ahmedabad'; // Replace with the desired location
  const dishId = '68987'; // Replace with the dish ID for pizza
  const zomatoPrice = await scrapeZomatoPizzaPrice(location, dishId);
  console.log('Zomato Pizza Price:', zomatoPrice);
})();
