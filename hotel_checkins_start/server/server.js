const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require("cors");

app.use(cors())
app.use(express.json());

// Connect to db
// Create router and pass db collection to it
MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology: true})
  .then((client) => {
    const db = client.db('hotel_checkins');
    const hotelBookings = db.collection('bookings');
    const bookingsRouter = createRouter(hotelBookings);
    app.use('/api/bookings', bookingsRouter);
  })
  .catch(console.error);

app.listen(5000, function () {
  console.log('App running on port 5000');
});
