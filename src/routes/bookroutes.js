const express=require("express");
const multer=require('multer');
const path=require('path');
const bookrouter=express.Router();
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

/*    var books=[{
        title:"The Alchemist",
        author:"Paulo Coelho",
        genre:"novel",
        img:"alchemist.jpg"
    
    },
    {
        title:"Harry potter",
        author:"J K Rowling",
        genre:"fantasy",
        img:"harry.jpg"
    },
    {
        title:"Rich Dad Poor Dad",
        author:"Robert Kiyosaki and Sharon Lechter",
        genre:"Self help book",
        img:"rich dad poor dad.jpg"
    }
    
    ]*/
    bookrouter.get("/",function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                title:'library',
                books,
                success:''
        })
        
        });
    });
    bookrouter.get("/:id",function(req,res){
        const id=req.params.id;
       Bookdata.findOne({_id:id})
       .then(function(book){
        res.render("book",{
            nav,
             title:'library', 
             book
            })
        })
        
        })

        bookrouter.get("/edit/:id",function(req,res){
            //res.send("edit page");
            const id=req.params.id;
            Bookdata.findOne({_id:id})
       .then(function(book){
        res.render("editbook",{
            nav,
             title:'library', 
             book
            })
        })
        })

        bookrouter.post("/update",function(req,res){
            const upload=multer({
                storage:storage
            }).single('image')
            
            upload(req, res, function(err) {
         // res.send("update");
         var id=req.body.id;
         var title=req.body.title;
         var author=req.body.author;
         var genre=req.body.genre;
         var image=req.body.image;
         //var image=req.file.filename

       

         //res.send(id);
         //Bookdata.update({_id:id},{$set:{title:title}});
        // Bookdata.update({_id:id}, {$set:{title:title}});
        if(req.file)
    {
        var image=req.file.filename
         Bookdata.update({_id:id}, {$set:{title:title,author:author,genre:genre,image:image}}, function(err, result) {
            if (result){

            }
            Bookdata.find()
           .then(function(books){
           res.render("books",{
            nav,
            title:'library',
            books,
            success:"Book edited successfully!"
        });
           })
         });

        }//if end
        else{
            Bookdata.update({_id:id}, {$set:{title:title,author:author,genre:genre}}, function(err, result) {
                if (result){
    
                }
                Bookdata.find()
               .then(function(books){
               res.render("books",{
                nav,
                title:'library',
                books,
                success:"Book edited successfully!"
            });
               })
             });
        }
         //res.redirect('/books');      
        });
        //res.redirect('/books');
        
        })


        bookrouter.get("/delete/:id",function(req,res){
           // res.send("delete")
           const id=req.params.id;
            Bookdata.deleteOne({ _id:id}, function (err, results) {
                if(results){
                   
                }
           
           // res.redirect('/books');
           Bookdata.find()
           .then(function(books){
           res.render("books",{
            nav,
            title:'library',
            books,
            success:"Book deleted successfully!"
        });
           })
    })
        })  
    
    return bookrouter;
}



module.exports=router;