const db = require('../models');
const path = require('path');
module.exports=function(app){

    //create profile
    app.post("/api/userProfiles",function(req,res){
        db.Adopter.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            bio:req.body.bio,
            picture:req.body.picture,
            conditions:req.body.conditions,
            profile:req.body.profile,
            uid:req.body.uid,
            interested:false
        })
        //need to send status for callback on ajax post.
        res.sendStatus(200);
    });

    //get profile data for different uids
    app.get('/api/profiles/:uid',function(req,res){
        db.Adopter.findAll({
            where:{
                uid:req.params.uid
            }
        }).then(function(data){
            
            //send user data to html and js file [data]
            res.json(data);
            
        })
    });

    app.get('/userProfile',function(req,res){
        res.sendFile(path.join(__dirname,"../public/userProfile.html"));
    })

};