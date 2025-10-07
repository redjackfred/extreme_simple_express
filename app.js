const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const hostname = require('os').hostname();
  res.send(`<h1>Hello from ${hostname}, this is a simple express application!\n</h1><p>From Pei-Wen Tang(Vincent)</p>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
