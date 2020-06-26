const mongoose=require('mongoose');
/*mongoose.set('useNewUrlParser',true);
mongoose.set('useFindAndModify',true);
mongoose.set('useCreateIndex',true);
mongoose.set('useUnifiedTopology',true);*/
mongoose.connect('mongodb://localhost:27017/casestudy2');


const Schema=mongoose.Schema;

const BookSchema=new Schema({
    title:String,
    author:String,
    genre:String,
    image:String
});

var Bookdata=mongoose.model('bookdata',BookSchema);

module.exports=Bookdata;
