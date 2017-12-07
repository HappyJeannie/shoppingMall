//一个js文件代表一个模块，所以可以不写文件类型直接加载
//在安装node的过程中已经包括了require模块，所以可以直接用
let user = require('./User');

console.log(`userName:${user.userName}`);

console.log(`I'm ${user.userName}, I say ${user.sayHello()}`);