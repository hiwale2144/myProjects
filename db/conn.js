const mongoose = require('mongoose');

const DB = 'mongodb+srv://shubhamHiwale:shubhiweb00@cluster0.xuch8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const DB = process.env.DATABASE;
mongoose.connect(DB,{
    
}).then(()=>{
    console.log('database connection successfull');
}).catch((err)=>{
    console.log(`database connection failed ${err}`);
})