const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static('client/build'));


app.listen(PORT, () =>
  console.log('Express server is running on localhost:8080')
);