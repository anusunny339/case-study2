const express=require("express");
const multer=require('multer');
const path=require('path');
const addauthorrouter=express.Router();

const authordata=require('../model/authordata');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/uploads/');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

function router(nav){
    addauthorrouter.get("/",function(req,res){
        res.render('addauthor',{
            nav,
            title:'library'
        });
    })

    addauthorrouter.post('/add',function(req,res){
       // res.send("add");
       const upload=multer({
        storage:storage
    }).single('image')
    
    upload(req, res, function(err,results) {
       var item={
        name:req.body.name,
        areaofInterest:req.body.areaofInterest,
        dateofBirth:req.body.datofBirth,
        image:req.file.filename,
        
        /**
         var imagedetails=new 
         */
    }
    var author=authordata(item);
      author.save();
      if(results){

      }
       res.redirect('/authors');
        
    
    })
})

    return addauthorrouter;
}
module.exports=router;

