// server.js

const express = require('express');
const bodyParser = require('body-parser');
const beautyProductPrices = require('./beautyProductPrices'); // Import the function to fetch beauty product prices
const groceryPrices = require('./groceryPrices');
const electronicsPrices = require('./electronicsPrices');
const furniturePrices = require('./furniturePrices');
const foodPrices = require('./foodPrices');

const app = express();
const port = 4000;

app.use(bodyParser.json());

// Endpoint to fetch beauty product prices
app.post('/beauty', async (req, res) => {
    try {
        const productName = req.query.productName; // Extract the product name from the request body
        const prices = await beautyProductPrices(productName); // Call the function to fetch prices
        res.json({ prices }); // Send the prices back to the frontend
    } catch (error) {
        console.error('Error fetching beauty product prices:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/grocery', async (req, res) => {
    try {
        const productName = req.query.productName; // Extract the product name from the request body
        const prices = await groceryPrices(productName); // Call the function to fetch prices
        res.json({ prices }); // Send the prices back to the frontend
    } catch (error) {
        console.error('Error fetching grocery product prices:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/fashion', async (req, res) => {
    try {
        const productName = req.query.productName; // Extract the product name from the request body
        const prices = await beautyProductPrices(productName); // Call the function to fetch prices
        res.json({ prices }); // Send the prices back to the frontend
    } catch (error) {
        console.error('Error fetching fashion product prices:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/electronics', async (req, res) => {
    try {
        const productName = req.query.productName; // Extract the product name from the request body
        const prices = await electronicsPrices(productName); // Call the function to fetch prices
        res.json({ prices }); // Send the prices back to the frontend
    } catch (error) {
        console.error('Error fetching electronic product prices:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/furniture', async (req, res) => {
    try {
        const productName = req.query.productName; // Extract the product name from the request body
        const prices = await furniturePrices(productName); // Call the function to fetch prices
        res.json({ prices }); // Send the prices back to the frontend
    } catch (error) {
        console.error('Error fetching furniture product prices:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/food', async (req, res) => {
    try {
        const productName = req.query.productName; // Extract the product name from the request body
        const prices = await foodPrices(productName); // Call the function to fetch prices
        res.json({ prices }); // Send the prices back to the frontend
    } catch (error) {
        console.error('Error fetching food product prices:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
