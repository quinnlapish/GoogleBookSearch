const express = require('express');
const app = express();

app.use(express.static('client/build'));


app.listen(8080, () =>
  console.log('Express server is running on localhost:8080')
);