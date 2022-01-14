const express = require('express');
const app = express();

const cors = require("cors");
app.use(cors())
app.use(express.json());

// Connect to db
// Create router and pass db collection to it

app.listen(5000, function () {
  console.log('App running on port 5000');
});
