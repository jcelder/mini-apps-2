const express = require('express');
const morgan = require('morgan');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log(`Server listening on port ${3000}`);
});
