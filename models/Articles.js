const mongoose =  require('mongoose')
var ArticleSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
        trim: true,
        minlength: 1
    },
    url:{
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    date:{
        type: Date
    }
}, { versionKey: false })
var Articles = mongoose.model('articles',ArticleSchema)
module.exports = {Articles}