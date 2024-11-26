const express = require('express');

const app = express(

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

//server listening
app.listen(1245, () => {
  console.log(`Server listening on port 1245`);
});

// exporting server
module.exports = app;
