/**
 * 1. 为什么一个JS文件就是一个模块，因为每个JS文件里的代码都会在外面套一个function,
 * 里面的所有变量都成为了函数内部的私有变量
 * 2. 如何引入一个模块
 *
 */
function mod(){
    var a = 1;
    var exports = {};
    ///=================
    function add(a,b){
        return a+b;
    }
    exports.add = add;
    ///=================
    return exports;
}

var m = mod();
console.log(m.a);
console.log(m.add(1,2));
