var test=require("./test.js");  // it is just like import its about you what you choose
const express = require('express') // importing express in file
const app = express()    // making instance of the express
const db=require("./db")//importing db from db.js which is representing connection with mongo in db.js file
const bodyParser=require("body-parser") // in whatever format user sends data to backend ,it converts the 
app.use(bodyParser.json());                //data into the suitable form or json

//test
var age=test.age;
var add10age=test.add(age,10);
console.log(add10age);

//express js
 // using get method from app(instance of express) it takes path and fucntion(which return response)
app.get('/', function (req, res) { 
  res.send('Hello welcome to my Hotel')
})


// importing routes
const personRoutes=require("./routes/personRoutes")

// using person routes
app.use("/person",personRoutes);




// menu
// in server.js we define routing by this but we prefer express routing thats why we use e.r leaving it only for learning 

// app.post("/menu",async (req,res)=>{

  
//   try{
//        const data=req.body          // data come from user passed with body person and come in suitable form here
//        const newMenu=new Menu(data) // created new menu document  using the mongoose model

//        const response= await newMenu.save()
//        console.log("data save successfully")
//        res.status(200).json(response)
//   }
//   catch(err){
//     console.log("data save failed")
//     res.status(500).json({error:"Internal Server Error"})
//   }
  
// })

// app.get("/menu",async (req,res)=>{
//   try{
//    const data= await Menu.find();
//    console.log("data fetched successfully")
//        res.status(200).json(data)
//   }
//   catch(err){
//     console.log("data fetch failed")
//     res.status(500).json({error:"Internal Server Error"})
//   }
// })

// instead of above we use this

// importing routes
const menuRoutes=require("./routes/menuRoutes")

// using person routes
app.use("/menu",menuRoutes);



app.listen(3000,()=>{
  console.log("server started at port number 3000")
}) // means run this server on 3000 port number









// var _=require('loadash'); // very usefull library to interprate with data and underscore is just a alias
//loadash
// var data=[1,2,3,1,4,5,2,6,7];
// var uniqueValues=_.uniq(data);
// print(uniqueValues)

// print(_.isString("boy"))  returns true or false
  


