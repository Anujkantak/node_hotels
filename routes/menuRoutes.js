const express=require("express");
const router=express.Router();
const Menu=require("../models/Menu")

router.post("/",async (req,res)=>{

  
  try{
       const data=req.body          // data come from user passed with body person and come in suitable form here
       const newMenu=new Menu(data) // created new menu document  using the mongoose model

       const response= await newMenu.save()
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
   const data= await Menu.find();
   console.log("data fetched successfully")
       res.status(200).json(data)
  }
  catch(err){
    console.log("data fetch failed")
    res.status(500).json({error:"Internal Server Error"})
  }
})

router.get("/:tasteType",async (req,res)=>{
  try{
    const tasteType=req.params.tasteType;
    if(tasteType==="sour" || tasteType==="sweet" || tasteType==="spicy"){
      const response=await Menu.find({taste:tasteType});
      res.status(200).json(response)
    }
    else{
      res.status(400).json({error:"Invalid taste Type"})
    }

  }catch(err){
    res.status(500).json({error:"Internal server error"});
  }
})


//comment added

module.exports=router

