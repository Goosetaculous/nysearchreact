var db = require('../models/Articles')


module.exports=(app)=>{
    app.post("/api/save",(req,res)=>{
        db.Articles.create(req.body).then((test)=>{
            res.status(200).json({success:1})
        }).catch((e)=>{
            res.status(500).json({error:e})
        })
    })
}