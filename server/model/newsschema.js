const mongoose = require('mongoose')

let main=new mongoose.Schema({
	author: String,
	title: {type: String, unique: true},
	description: String,
	urlToImage:String},{collection : "News", versionKey : false}
)

let schema= mongoose.model('News',main);

module.exports= (schema);