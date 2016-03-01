/**
 * 同步就是执行顺序和任务的排列顺序相同
 *
 */
/*
console.log('a');
console.log('b');
*/

/**
 * 异步就是执行顺序和任务的排列顺序不相同
 *
 */
setTimeout(function(){
    console.log('a');
},1000);

console.log('b');