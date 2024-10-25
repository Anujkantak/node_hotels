const mongoose=require("mongoose"); // to establish connection between nodejs and mongodb

const mongoURL="mongodb://127.0.0.1:27017/hotels" // url of mongodb server through which we want to connect


mongoose.connect(mongoURL,{  // establishing connection with the mongodb url and these parameter helps to match with the future updates
  useNewUrlParser:true,
  useUnifiedTopology:true
});


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