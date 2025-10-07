const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const hostname = require('os').hostname();
  res.send(`Hello from ${hostname}, this is Pei-Wen from USF!\n`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
