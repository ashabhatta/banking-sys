const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config({path : './config.env'});

const connectMongo = async() => {
    try{
     await mongoose.connect(process.env.DATABASE_CLOUD,{ useNewUrlParser: true , useUnifiedTopology: true, useCreateIndex : true } );
     console.log("Connected to database");
    }
    catch(e)
    {
        console.log(e);
        throw e;
    }
}

module.exports = connectMongo;