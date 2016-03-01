//fs是NODE亲生的，用于读写文件的模块
//require里面放的是NODE的模块的名字
var fs = require('fs');
//同步读取文件的内容，通过返回值接收
//读了动作会阻塞后续代码的执行
//1.参数是要读取的文件的文件路径  第二个参数是此文件编码类型
var content = fs.readFileSync('./readme.txt','utf8');
console.log(content);
console.log('b');

