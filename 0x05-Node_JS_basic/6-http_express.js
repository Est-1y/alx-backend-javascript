const express = require('express');

const app = express();
const PORT = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

//server listening
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

// exporting server
module.exports = app;
