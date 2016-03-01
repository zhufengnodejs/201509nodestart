//加载node.js提供的核心模块
var http = require('http');
//创建服务器 localhost
/**
 * request 听筒 代表客户端的请求,可以获取客户端的请求信息
 * response 话筒  代表客户端的响应，可以向响应里写入内容
 */
var server = http.createServer();
//每当客户端请求到来的时候，都会执行回调函数
server.on('request',function(request,response){
    response.write('hello');//写入响应
    response.write('world');
    response.end();//挂掉电话
});
//在本地监听8080端口
//国风美唐4号楼416等着大家过来
server.listen(8080);

