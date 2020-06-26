const mongoose=require('mongoose');
/*mongoose.set('useNewUrlParser',true);
mongoose.set('useFindAndModify',true);
mongoose.set('useCreateIndex',true);
mongoose.set('useUnifiedTopology',true);*/
mongoose.connect('mongodb://localhost:27017/casestudy2');

const Schema=mongoose.Schema;

const signupSchema=new Schema({
    firstName:String,
    lastName:String,
    dateofBirth:String,
    email:String,
    contactno:Number,
    address:String,
    password:String,
    cpassword:String
});
var signupdata=mongoose.model('signupdata',signupSchema);

module.exports=signupdata;
