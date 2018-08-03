const db = require('../models');

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
    });

    //get own profile
    app.get('/api/profiles/:uid',function(req,res){
        db.Adopter.findAll({
            where:{
                uid:req.params.uid
            }
        }).then(function(data){
            res.send(data);
        })
    })

};