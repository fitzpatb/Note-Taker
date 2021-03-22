const express = require('express');
const fs = require("fs");
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));
app.use(express.static('public'));

require('./routes/routes')(app);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});