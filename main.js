//  var fs = require("fs");

// 阻塞（同步）
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log("程序执行结束!");

//非阻塞（异步）
// var fs = require("fs");
//执行异步操作的函数将回调函数作为最后一个参数， 回调函数接收错误对象作为第一个参数。
// fs.readFile('input.txt', function (err, data) {
//    if (err){
//       console.log(err.stack);
//       return;
//    }
//    console.log(data.toString());
// });
// console.log("程序执行完毕");

// console.log("程序执行结束!");

// 引入 events 模块
// var events = require('events');
// // 创建 eventEmitter 对象
// var eventEmitter = new events.EventEmitter();

// // 创建事件处理程序
// var connectHandler = function connected() {
//    console.log('连接成功。');
//    // 触发 data_received 事件 
//    eventEmitter.emit('data_received');
// }

// // 绑定 connection 事件处理程序
// eventEmitter.on('connection', connectHandler);

// // 使用匿名函数绑定 data_received 事件
// eventEmitter.on('data_received', function(){
//    console.log('数据接收成功。');
// });
// // 触发 connection 事件 
// eventEmitter.emit('connection');
// console.log("程序执行完毕。");


// buf = Buffer.alloc(26);
// for (var i = 0 ; i < 26 ; i++) {
//   buf[i] = i + 97;
// }

// console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
// console.log( buf.toString('ascii',0,5));   // 输出: abcde
// console.log( buf.toString('utf8',0,5));    // 输出: abcde
// console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde


const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);

// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);

const copy = JSON.parse(json, (key, value) => {
    return value && value.type === 'Buffer' ?
        Buffer.from(value.data) :
        value;
});

// 输出: <Buffer 01 02 03 04 05>
console.log(copy);