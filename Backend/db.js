const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://example123:Example%40123@cluster0.715omsp.mongodb.net';

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
