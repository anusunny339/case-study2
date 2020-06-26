const express=require("express");
const signuprouter=express.Router();
const signupdata=require('../model/signupdata');
function router(nav){
    signuprouter.get("/",function(req,res){
        res.render("signup",{
            nav,
            title:'library'
           
        });
    });
    
    signuprouter.post("/add",function(req,res){
       // res.send("signup here!!!!!!!");
       var item={
        firstName:req.body.fname,
        lastName:req.body.lname,
        dateofBirth:req.body.dob,
        email:req.body.emails,
        contactno:req.body.phone,
        address:req.body.address,
        password:req.body.password,
        cpassword:req.body.cpassword
        
        /**
         var imagedetails=new 
         */
    }
    var signup=signupdata(item);
      signup.save();
       res.redirect('/');
        
    })

    return signuprouter;
}



module.exports=router;