const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));
var PORT = process.env.PORT || 8080;


require('./routes/html-routes')(app);
require('./routes/api-routes')(app);


db.sequelize.sync().then(function(){
app.listen(PORT,function(){
    console.log(`You are listening on ${PORT}`);
});

});