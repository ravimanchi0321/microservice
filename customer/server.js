const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello from Customer Service!');
});

app.listen(port, () => {
  console.log(`Customer service running on http://localhost:${port}`);
});

