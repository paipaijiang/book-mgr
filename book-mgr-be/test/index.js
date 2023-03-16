const mongoose = require('mongoose');
//1、给哪个数据库的
//2、哪个集合
//3、添加什么文档


//Schema
//modal 根据Schema生成一套方案，用来操作mongoDB下的集合和集合下的文档
const UserSchema= new mongoose.Schema({
	nickname:String,
	password:String,
	age:Number,
});
const UserModal=mongoose.model('User',UserSchema);

const connect =()=>{
	//连接数据库
	mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');

	//数据库被打开时做一些事情
	mongoose.connection.on('open',()=>{
		console.log('数据库连接成功！');
		//创建文档
		const user = new  UserModal({
		 	nickname:'小红',
			password:'123',
			age:22,
		 });
		 //保存，同步到MongoDB
		 user.save();
	});
};
connect();
