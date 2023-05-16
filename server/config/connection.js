require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:3001/distirubution_finder",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

module.exports = mongoose.connection;