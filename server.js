const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));
var PORT = process.env.PORT || 8080;


require('./routes/html-routes')(app);


app.listen(PORT,function(){
    console.log(`You are listening on ${PORT}`);
})