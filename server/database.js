const mongoose=require("mongoose");
const uri= 'mongodb://localhost/lubys';
mongoose.connect(uri)
    .then(db=>{
        console.log('DB is connect');
    })
    .catch(err=>{
        console.error(err);
    });
module.exports=mongoose;