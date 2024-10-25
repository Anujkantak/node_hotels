const mongoose=require("mongoose");

const personSchema=mongoose.Schema({ // first we create schema of the model
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true,

  },
  phone:{
     type:String,

  },
  occupation:{
    type:String,
    enum:["chef","waiter","manager"],
    required:true
  },
  salary:{
    type:Number,
    required:true
  }
})

// here we are creating model of person with the help of Schema
const Person=mongoose.model("Person",personSchema); 

module.exports=Person;