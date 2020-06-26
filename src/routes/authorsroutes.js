const express=require("express");

const multer=require('multer');
const path=require('path');
const authorsrouter=express.Router();

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

function aurouter(nav){

    /*var authors=[{
        name:"Paulo Coelho",
        designation:"Brazilian lyricist and novelist",
        born:"24 august 1947",
        img:"paulo coelho.jpg"
    
    },
    {
        name:"J K Rowling",
        designation:"British author",
        born:"31 july 1965",
        img:"jk rowling.jpg"
        
    },
    {
        name:"Robert Kiyosaki",
        designation:"American businessman &author",
        born:"8 April 1947",
        img:"robert kiyosaki.jpg"
    },
    {
        name:"Sharon Lechter",
        designation:"American accountant, author, and businesswoman",
        born:"12 January 1954",
        img:"sharon lechter.jpg"
    }
    
    
    ]*/

    authorsrouter.get("/",function(req,res){
        authordata.find()
        .then(function(authors){
        res.render("authors",{
            nav,
            title:'library',
            authors
        });
    })
    });

    authorsrouter.get("/:id",function(req,res){
        const id=req.params.id;
        authordata.findOne({_id:id})
        .then(function(author){
        res.render("author",{
           nav,
            title:'library', 
            author
        })
    })
    })

    authorsrouter.get("/edit/:id",function(req,res){
        //res.send("edit page");
        const id=req.params.id;
        authordata.findOne({_id:id})
   .then(function(author){
    res.render("editauthor",{
        nav,
         title:'library', 
         author
        })
    })
    })

    authorsrouter.post("/update",function(req,res){
        
        const upload=multer({
            storage:storage
        }).single('image')
        
        upload(req, res, function(err) {
        
     // res.send("update");
     var id=req.body.id;
     var name=req.body.name;
     var areaofInterest=req.body.areaofInterest;
     var dob=req.body.dateofBirth;
     
     if(req.file){
        var image=req.file.filename;
     authordata.update({_id:id}, {$set:{name:name,areaofInterest:areaofInterest,dateofBirth:dob,image:image}}, function(err, result) {
        if (result){

        }
     
            
    });
}//if end
else{
    authordata.update({_id:id}, {$set:{name:name,areaofInterest:areaofInterest,dateofBirth:dob}}, function(err, result) {
        if (result){

        }
     
            
    });
}
    res.redirect('/authors');
})
    })

    authorsrouter.get("/delete/:id",function(req,res){
        // res.send("delete")
        const id=req.params.id;
        
         authordata.deleteOne({ _id:id}, function (err, results) {
             if(results){
                // res.redirect('/authors');
             }
         });
         res.redirect('/authors');
     })  

   
    return authorsrouter;
}



module.exports=aurouter;