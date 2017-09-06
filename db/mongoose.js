var mongoose =  require('mongoose')
var bluebird = require("bluebird");
//mongoose.Promise =  bluebird; // use promises
mongoose.Promise =  global.Promise; // use promises
// connecting
mongoose.connection.openUri(process.env.MONGODB_URI)
module.exports = {mongoose}