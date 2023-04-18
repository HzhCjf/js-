// fs:一.文件操作   二.目录操作
// 一.文件操作
const { rejects } = require('assert')
const { error } = require('console')
const fs = require('fs')
const { type } = require('os')
const { resolve } = require('path')
// 1.文件写入
// fs.writeFile
// fs.writeFileSync

// 2.文件读取
// fs.readFile
// fs.readFileSync

// 3.文件的删除:不进入回收站
// 同步删除:
// fs.unlinkSync('文件路径')

// try{
//     fs.unlinkSync('./1.txt')
//     console.log('删除成功');
// }catch(err){
//     console.log(err);
// }


// 异步删除:
// fs.unlink('文件路径')

// fs.unlink('./1.txt',err=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log('删除成功');
// })


// 4.判断文件是否存在,如果存在返还true,否则返还false
// console.log(fs.existsSync('./1.txt'));
// let src = './1.txt'
// if(fs.existsSync(src)){
//     fs.unlinkSync(src)
//     console.log('删除成功');
// }else{
//     console.log('已经删除了');
// }



// 5.修改文件名称 ：
// 同步修改 
// try{
//     fs.renameSync("./1.txt","./2.txt");
//     console.log("修改成功");
// }catch(err){
//     console.log(err);
// }

// 异步修改 
// fs.rename("2.txt","3.txt",err=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log("修改成功");
// })


// 6.判断文件 是不是文件 （1.文件 2.目录 ）

// 第一步 获取文件的详细信息 
// let stat = fs.statSync("./mytest");
// console.log(stat);
// // 第二步 更加详细信息判断是否是一个文件 
// console.log( stat.isFile()) ;  // 如果是文件返还true 否则返还false




// 7.复制文件
// src 需要复制的文件
// dist 复制新文件的名称


// 同步复制
// function copy(src,dist){
//     try{
//         fs.writeFileSync(dist,fs.readFileSync(src))
//     }catch(err){
//         console.log(err);
//     }
// }



// 异步复制
// 方法一:
// 定义文件复制函数
// function copy(src,dist){
//     fs.readFile(src,'utf-8',(err,data)=>{  // 同步读取源文件内容
//         if(err){  // 如果读取时出现错误，则抛出异常并捕获。
//             return console.log(err);
//         }
//         fs.writeFile(dist,data,err =>{ // 写入文件操作，如果打开文件时出现错误，则抛出异常并捕获。 
//             if(err){
//                 return console.log(err); 
//             }
//             console.log('写入成功'); // 写入操作完成后输出“写入成功”的信息。
//         })
//     })
// }

// copy('1.txt','2.txt');  // 调用copy方法，默认情况下复制1.txt文件为2.txt文件。




// 方法二:把读取和写入分别封装成promise对象
// 将文件读取操作转化为返回Promise对象的形式
// function myread(src){
//     return new Promise((resolve,reject)=>{ // 创建Promise实例并返回
//         fs.readFile(src,'utf-8',(err,data)=>{
//             if(err){ // 出现错误时将Promise对象状态置为rejected状态，并返回相应的错误信息。
//                 reject(err)
//             }
//             resolve(data) // 如果读取成功，则将Promise对象状态置为resolved状态并将读取到的数据作为结果返回。
//         })
//     })
// }

// // 将文件写入操作转化为返回Promise对象的形式
// function mywrite(dist,data){
//     return new Promise((resolve,reject)=>{  // 创建Promise实例并返回
//         fs.writeFile(dist,data,err =>{   // 执行fs的写入操作，如果出现错误则将Promise对象状态置为rejected状态，并返回相应的错误信息。
//             if(err){
//                 reject(err)
//             }
//             resolve('写入成功') // 写入成功后将Promise对象的状态置为resolved状态，并返回写入完成带来的成功消息。
//         })
//     })
// }

// async function myCopy(src,dist){  // 定义异步函数myCopy
//     try{
//         let data = await myread(src)  // 使用Promise对象转换过的myread函数读取源文件
//         let res = await mywrite(dist,data) // 使用Promise对象转换过的mywrite函数将data变量中存储的内容写入目标文件
//         console.log(res);  // 输出写入完成的消息
//     }catch(err){
//         console.log(err); // 捕获并输出失败时产生的错误信息。
//     }
// }

// myCopy('2.txt','3.txt') // 调用myCopy函数，将2.txt文件复制到3.txt文件。





// 方法三:
//把读取和写入封装成一个promise对象
// 将普通的回调式API改造成返回Promise对象的函数
function myPromisify(fn) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            fn(...args,(err,data)=>{ // 通过spread操作符将参数传入fn中
                if(err){ // 如果出现错误，则将Promise对象置为rejected状态
                    reject(err);
                }
                if(typeof data !== "undefined"){ // 如果读取到数据，则将Promise对象置为resolved状态，将数据作为结果返回
                    resolve(data); // 读取操作
                }else{ // 如果写入成功，则将Promise对象置为resolved状态，将默认信息“写入成功”作为结果返回
                    // 写入操作
                    resolve("写入成功"); 
                }
            });
        })
    }
}

async function myCopy(src, dist) { // 定义异步函数myCopy，用于复制文件
    try {
        let data = await myPromisify(fs.readFile)(src,"utf-8"); // 使用自定义的myPromisify函数处理fs模块的readFile方法，并将结果存储在data变量中
        let res = await myPromisify(fs.writeFile)(dist,data); // 使用自定义的myPromisify函数处理fs模块的writeFile方法，并将结果存储在res变量中
        console.log(res); // 打印结果（可以是默认信息或写入操作的返回值）
    } catch (err) {
        console.log(err); // 捕获异常并输出错误信息
    }
}

myCopy('3.txt','4.txt') // 调用myCopy函数，复制3.txt文件到4.txt文件