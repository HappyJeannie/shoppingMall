var http = require('https');

let util = require('util');

http.get('https://api.douban.com//v2/movie/in_theaters',function(res){
	let data = '';
	res.on('data',function(chunk){
		data += chunk;
	});
	res.on('end',function(){
		let result = JSON.parse(data);
		console.log('result:' + util.inspect(data));
	})
})