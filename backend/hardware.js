const db = require('./db'); // Import the database connection from db.js

// Function to query the database and return a Promise
function getHardwareData() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM hardware', (err, results) => {
      if (err) {
        console.error('Error executing query:', err.message);
        return reject(err); // Reject the promise if there is an error
      }
      console.log('Query results:', results);
      resolve(results); // Resolve the promise with the query results
    });
  });
}

module.exports = getHardwareData;
