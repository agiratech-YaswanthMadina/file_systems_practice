const fs = require('fs')
const path = require('path')

//Reading a file
let content = fs.readFileSync('one.txt')

console.log(content);

//Writing a file
fs.writeFileSync('two.txt', 'New content arrived')

//update a file
fs.appendFileSync('three.txt', ' this is the new content')

//deleting a file
//fs.unlinkSync('one.txt')

//Working with Directory..

//creating a directory
// fs.mkdirSync('myDirectory')


//removing a directory
// fs.rmdirSync('myDirectory')

//file exists or not
// let value = fs.existsSync('two.txt')
// console.log(value);

//reading directory
// let path = '//home//agira//FileSystems-Practice//directory'

// let check = fs.readdirSync(path)

// console.log(check);

//path module working

let p = path.join(__dirname,'../weather-app/index.js')
console.log(p);