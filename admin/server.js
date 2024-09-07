const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send('Hello from Admin Service!');
});

app.listen(port, () => {
  console.log(`Admin service running on http://localhost:${port}`);
});

