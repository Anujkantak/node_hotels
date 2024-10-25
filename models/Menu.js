const mongoose=require("mongoose");

const menuschema= new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    default:9.99,
  },
  taste:{
    type:[String],
    
    
    
    enum:["spicy","sour","sweet"]
  },
  is_drunk:{
    type:String,
    default:false
  },
  ingredients:{
    type:[String],
    default:[]
  },
  sales:{
    type:Number,
    default:0
  }
})

const Menu=new mongoose.model("Menu",menuschema);



module.exports=Menu