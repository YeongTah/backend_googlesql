// db.js - First version
require('dotenv').config(); // Load environment variables from .env file
const mysql = require('mysql2');

// Create a connection to the database using environment variables
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Connect to the database and handle errors
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  console.log('Connected to the MySQL database. - Nxgen Demo');
});

// Export the connection for use in other modules
module.exports = connection;
