require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const getHardwareData = require('./hardware'); // Import the function from hardware.js

const app = express(); // Create an Express app
const port = process.env.PORT || 3000; // Set the port, default to 3000

// Middleware to parse JSON request bodies (optional)
app.use(express.json());

// Define routes

// Home route (GET /)
app.get('/', (req, res) => {
  res.send('Welcome to the hardware database API!');
});

// Hardware data route (GET /hardware)
app.get('/hardware', async (req, res) => {
  try {
    const data = await getHardwareData();  // Await the result of getHardwareData
    console.log('Fetched data:', data);  // Log the data to verify
    res.json(data);  // Send the data as a JSON response
  } catch (err) {
    console.error('Error fetching hardware data:', err);
    res.status(500).send('Error fetching hardware data');  // Handle error
  }
});

// Start the server
app.listen(port, 'localhost', () => {  // Listen on localhost
    const baseUrl = `http://localhost:${port}`;  // Localhost URL
    console.log(`Server is running on ${baseUrl}`);  // Output the URL in the console
  });