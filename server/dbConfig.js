const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect("mongodb+srv://admin:admin123@main.eo4q3.mongodb.net/main?retryWrites=true&w=majority&appName=Main");
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    
  }
};

module.exports = connectDb;