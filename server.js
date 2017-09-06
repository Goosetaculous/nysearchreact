const express =  require('express')
const app =  express()
require('dotenv').config()
app.set("port", process.env.PORT || 3001)
app.use(express.static("build"))

//CORS STUFF
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next();
});

//if(process.env.NODE_ENV === "production"){
//    app.use(express.static("build"))
//}
//

app.get("/api/test",(req,res)=>{
    res.json({test:1})
})

app.listen(app.get("port"),()=>{
    console.log(`Find the server at: http://localhost:${app.get("port")}/`)
})