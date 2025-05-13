const express = require('express');

const mongobd = require('./data/database');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));


mongobd.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else{
        app.listen(port, () => {console.log('database is listing and Running on port 3000')});
    }
});
 
