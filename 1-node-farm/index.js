const fs = require('fs')
const http = require('http');


/////////////////////////////////
// FILES

// Blocking, synchronous way
// const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8')
// console.log(textIn)
// const textOut = `this is hwat we know about the avocado: ${textIn}.\n Created on ${Date.now()}`
// fs.writeFileSync('./starter/txt/output.txt', textOut)
// console.log('File written')

//  Non-blokcing, asynchronous way

// fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {
//     return err ? console.log('error') :
//         fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
//             console.log(data2);
//             fs.readFile('./starter/txt/append.txt', 'utf-8', (err, data3) => {
//                 console.log(data3);

//                 fs.writeFile('./starter/txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
//                     console.log('Your file has been written')
//                 })
//             })
//         })
// })

// console.log('Will read file')

/////////////////////////////////
// SERVER
const server = http.createServer((req, res) => {
    res.end('Hello from the server')
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on port 8000')
})