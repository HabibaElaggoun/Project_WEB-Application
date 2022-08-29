const mongoose = require('mongoose')

const activitieSchema = new mongoose.Schema({
name:{type: String, required:[true, 'name Activitie is  required'], uppercase: true},
image:String,
description : String,
createdOn:{type:Date, default:Date.now()},
})

module.exports = Activitie = mongoose.model('activitie', activitieSchema);