const express =  require('express')
var https =  require("https")
require('./config/config')
const {mongoose} =  require('./db/mongoose')
mongoose.Promise = Promise;
const app =  express()
var bodyParser = require("body-parser");
app.set("port", process.env.PORT || 3000)
app.use(express.static("build"))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//CORS STUFF
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next();
});
//Keep alive
setInterval(function() {
    https.get("https://nysearchreact.herokuapp.com/");
    console.log("test keep alive")
}, 300000);


require("./routes/APIroutes")(app)
app.listen(app.get("port"),()=>{
    console.log(`Find the server at: http://localhost:${app.get("port")}/`)
})