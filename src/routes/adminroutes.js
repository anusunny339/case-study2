const express=require("express");
const multer=require('multer');
const path=require('path');
const adminrouter=express.Router();

const Bookdata=require('../model/Bookdata');
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
    adminrouter.get('/',function(req,res){
        res.render('addbook',{
            nav,
            title:'library'
        });
    });
    
   adminrouter.post('/add',function(req,res){
    const upload=multer({
        storage:storage
    }).single('image')
    
    upload(req, res, function(err,results) {
        // console.log("up");
       var item={
           title:req.body.title,
           author:req.body.author,
           genre:req.body.genre,
           image:req.file.filename
           /**
            var imagedetails=new 
            */
       }
       var book=Bookdata(item);
       book.save();
       if(results){

       }
       res.redirect('/books');
       /*Bookdata.find()
           .then(function(books){
           res.render("books",{
            nav,
            title:'library',
            books,
            success:"Book added successfully!"
        });
           })*/
        

    })
       
   });
    return adminrouter;
}
module.exports=router;

