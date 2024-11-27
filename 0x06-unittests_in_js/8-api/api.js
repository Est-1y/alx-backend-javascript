// consts
const express = require('express');

const app = express();
const PORT = 7865;

// get response
app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

// listening to server
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

// module export
module.exports = app;
