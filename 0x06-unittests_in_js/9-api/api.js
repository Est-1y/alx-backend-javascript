const express = require('express');

const app = express();
const PORT = 7865;

// get response
app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

// get req and reponse
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

// listening to server
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

// export module
module.exports = app;
