const express=require("express");
const loginrouter=express.Router();

const signupdata=require('../model/signupdata');
function router(nav){
    loginrouter.get("/",function(req,res){
   
    res.render("login",{
        nav,
        title:'library',
        warning:""
       
    });
});

loginrouter.post('/check',function(req,res){
    
    var username=req.body.username;
    var passwords=req.body.passwords;
    
    //res.send(passwords);
    signupdata.findOne({ $and : [{ 'email' :  username },{ 'password' : passwords} ]}, function(err, user) {
       
        if (user){
             
            
               //console.log(a);
                console.log("valid");
                
                res.redirect('/');
               
        
    }
        else{
            //res.send("invalid username or password!!")
            res.render("login",{
                nav,
                title:'library',
                warning:'Invalid Username or Password !!'
               
            });
        }

         })
         
      


  });
    return loginrouter;
}

module.exports=router;