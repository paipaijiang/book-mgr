const Koa= require('koa');

const  app = new Koa();
 //通过app.use 注册中间件
//中间件本质上 它就是一个函数
//context 上下文  当前请求的相关信息都在里面

app.use((context)=>{
	const {request:req }=context;
	const {url}=req;
	if(url==='/user'){
		context.response.body='abcde';
		return;
	}
	context.body='??';
})
//开启一个http服务
//接受http请求并处理，处理完后响应
app.listen(3000,()=>{
 	console.log('启动成功');
 });

 console.log('1123333');