const mongoose= require("mongoose");
require('dotenv').config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://abhinavtodmal121:h6AkCUFseeIBkcnd@cluster0.mebrg.mongodb.net/BANK").then(()=>{console.log("MongoDB Connected")});
  } catch (error) {                    
    console.error(`Error: ${error.message}`);
  }
};

module.exports= connectDB;