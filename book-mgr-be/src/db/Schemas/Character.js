const mongoose =require('mongoose');
const{getMata,preSave}=require('../helpers');

const CharacterSchema = new mongoose.Schema({
	name:String,
	title:String,
	power:Object,

	meta:getMata(),
});
CharacterSchema.pre('save',preSave);

mongoose.model('Character',CharacterSchema);
