const mongoose=require("mongoose"); // to establish connection between nodejs and mongodb
require("dotenv").config(); // for storing sensitive information and using it we can use sensitive info here
 //const mongoURL=process.env.MONGO_DB_LOCAL_URL // url of mongodb server through which we want to connect

  // fetching mongodbhosturl from .env because it contain password 
const mongoURL=process.env.MONGO_DB_HOST_URL // above was local mongodb server but it was hosted mongodb server using mongodb atlas


mongoose.connect(mongoURL) // establishing connection with the mongodb url and these parameter helps to match with the future);


const db=mongoose.connection // mongooose maintains a default connection object representing mongodb connection


// we can define event listener for the operations happenig ih the database

db.on("connected",()=>{ // here "connected" is defined as an event
  console.log("connected to mongo database");

});

db.on("error",(error)=>{ // here "connected" is defined as an event
  console.error("connected to database",error);

});

db.on("disconnected",()=>{ // here "connected" is defined as an event
  console.log("disconnected from mongo database");

});

module.exports =db;
