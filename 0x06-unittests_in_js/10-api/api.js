const express = require('express');

const app = express();
const PORT = 7865;

// use express.jsom
app.use(express.json());

// req and res
app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

// get re and res
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

// get req and response
app.get('/available_payments', (_req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

// post req and response
app.post('/login', (req, res) => {
  let username = '';

  if (req.body) {
    username = req.body.userName;
  }

  res.send(`Welcome ${username}`);
});

// listening to server
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

// export module
module.exports = app;
