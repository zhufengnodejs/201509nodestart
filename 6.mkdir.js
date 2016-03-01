//引入第三方的模块
/**
 * 1.先看这个名字是不是NODE亲生的
 * 2.如果不是NODE亲生的，去node_modules下面找有没有这个文件夹
 */
var mkdirp = require('mkdirp');

mkdirp('a/b/c', function (err) {
    if (err) console.error(err)
    else console.log('pow!')
});