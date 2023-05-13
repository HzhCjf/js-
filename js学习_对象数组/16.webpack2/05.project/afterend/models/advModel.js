const mongoose =require('../connect')
let schema = mongoose.Schema({
    advname:String,
    newFilename:String,
    addTime:String
})

let advmodel = mongoose.model('advs',schema)
module.exports = advmodel