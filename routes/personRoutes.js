
// express router = it is used to modularize and organize the routes handling of express js routerplication
// it increase readability , understandibility

const express=require("express");
const router=express.Router();     // it helps to create route 
const Person=require("../models/person")  // importing person model 



router.post("/",async (req,res)=>{

  
  try{
       const data=req.body          // data come from user passed with body person and come in suitable form here
       const newPerson=new Person(data) // created new person document  using the mongoose model

       const response= await newPerson.save()
       console.log("data save successfully")
       res.status(200).json(response)
  }
  catch(err){
    console.log("data save failed")
    res.status(500).json({error:"Internal Server Error"})
  }
  
})

router.get("/",async (req,res)=>{
  try{
   const data= await Person.find();
   console.log("data fetched successfully")
       res.status(200).json(data)
  }
  catch(err){
    console.log("data fetch failed")
    res.status(500).json({error:"Internal Server Error"})
  }
})

router.get("/:workType",async (req,res)=>{// after colon means its a variable
  try{
    const workType=req.params.workType // extracting work type from the url user wants
    if(workType==="chef" || workType==="waiter" || workType==="manager"){
       const response= await Person.find({occupation:workType});
       console.log("response fetched");
       console.log(response)
       res.status(200).json(response);
    }
    else{
      res.status(400).json({error:"Invalid work Type"});
    }

  }catch(err){
    res.status(500).json({error:"Internal server Error"})
  }
})

router.put("/:id",async (req,res)=>{
  try{
    const personId=req.params.id;
    const updatedPerson=req.body;  // after body parser

    const response= await Person.findByIdAndUpdate(personId,updatedPerson,{
      new:true // return the true value in the response
      
    })

    if(response==null){
        res.status(400).json({error:"person not found"})
    }

    res.status(200).json(response);


  }
  catch(err){
    res.status(500).json({error:"Internal server error"});
  }
})

router.delete("/:id",async (req,res)=>{
  try{
    const personId=req.params.id;

    const response= await Person.findByIdAndDelete(personId);

    if(response==null){
        res.status(400).json({error:"person not found"})
    }

    res.status(200).json({message:"person deleted succesfully"});


  }
  catch(err){
    console.log(err);
    res.status(500).json({error:"Internal server error"});
  }
})

module.exports=router


