const mongoose=require("mongoose");
const bookschema=new mongoose.Schema({
title:{
    type:String,required:true
},
author: String,
year: Number,
genre: String
}
);

module.exports=mongoose.model("Book",bookschema);