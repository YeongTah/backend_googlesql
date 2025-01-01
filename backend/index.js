require('dotenv').config(); // Load environment variables
const mysql = require('mysql2'); // Import mysql2 package

// Create MySQL connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  socketPath: process.env.DB_SOCKET_PATH, // For Cloud SQL socket connection
  port: process.env.DB_PORT,
});

// Connect to MySQL
connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL!');
    
    // Test the connection by running a simple query
    connection.query('SELECT 1', (err, results) => {
      if (err) {
        console.error('Database query failed:', err);
      } else {
        console.log('Database query result:', results);
      }
    });
  }
});

// Set up Express server (if you're using Express)
const express = require('express');
const app = express();





// Your routes and other server logic go here
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
