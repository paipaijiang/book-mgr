const mongoose= require('mongoose');
const {connect}= require('../src/db/index');
const character = require('../src/helpers/character');


const {defaultCharacters}= character;
const Character =mongoose.model('Character');

connect()
	.then(async()=>{
		console.log('开始初始化角色，集合');
		await Character.insertMany(defaultCharacters);
		console.log('初始化角色，集合成功');
	});