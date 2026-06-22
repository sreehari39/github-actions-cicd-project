const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('This is from GitHub Actions CI/CD pipeline!');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});