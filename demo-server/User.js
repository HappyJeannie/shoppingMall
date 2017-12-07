// module.exports = {
// 	userName : "Summer",
// 	sayHello : function(){
// 		return 'Hello';
// 	}
// }

exports.userName = 'Tom';
exports.sayHello = function () {
	return 'World';
}
// 以上两种方法作用相同，个人比较能容易理解第一种方法

let http = require('http');
let url = require('url');
let util = require('util');

let server = http.createServer((req,res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain;charset=utf-8');
	console.log('url:'+req.url);
	// url.parse()的作用是将返回值转换成对象
	//util.inspect()的作用是将对象展开成字符串
	res.end(util.inspect(url.parse('http://localhost:3000/goods?id=123#tag')));	//响应结束
});

server.listen(3000,'127.0.0.1', () => {
	console.log("服务器已运行，地址为http://127.0.0.1:3000");
});
