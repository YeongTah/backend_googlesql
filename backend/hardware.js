const db = require('./db'); // Import the database connection from db.js

// Function to query the database and return a Promise
module.exports.getResolutionData = function getResolutionData() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM resolution_table', (err, results) => {
      if (err) {
        console.error('Error executing query:', err.message);
        return reject(err); // Reject the promise if there is an error
      }
      console.log('Query results:', results);
      resolve(results); // Resolve the promise with the query results
    });
  });
}


