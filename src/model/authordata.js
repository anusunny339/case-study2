const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/casestudy2');


const Schema=mongoose.Schema;
const authorSchema=new Schema({
    name:String,
    areaofInterest:String,
    dateofBirth:String,
    image:String
});

var authordata=mongoose.model('authordata',authorSchema);

module.exports=authordata;
