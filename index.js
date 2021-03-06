const express = require('express');
const app = express();
const pageRoute = require('./routes/index');
const path = require('path');
require('dotenv').config({path : './config.env'});


const PORT = process.env.PORT || 3000;

app.use(express.json() );
app.use(express.urlencoded({extended : false}) )
app.use(express.static(path.join(__dirname , 'public') ) );
app.set('views',path.join(__dirname, 'views') );
app.set('view engine', 'ejs' );
app.use('/',pageRoute);

app.listen(PORT, (res,req) => {
    console.log(process.env.DATABASE_CLOUD);
    console.log("Server is running at "+PORT);
} )