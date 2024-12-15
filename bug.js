const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doSomethingAsync()
    .then(() => {
      res.send('Hello, world!');
    })
    .catch((err) => {
      // Error handling that doesn't explicitly send an error response
      console.error('Error:', err);
    });
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    // Simulate a potential error
    const randomValue = Math.random();
    if (randomValue < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});