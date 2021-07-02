// package.json a manifest file that stores important information about project/package

//manual => creating a fila called package.json in the root, create properties etc

//running npm init and step by step 

//running npm init -y

//package-lock.json => to control the specific version for all the dependencies and packages 
//-> 3.4.6 the 3 is a major change, 4 minor, 6 debugg version change

//event driven programming
// event takes place a callback is fired
//
const EventEmitter = require('events');


const customEmitter = new EventEmitter()

//on listen for an event
//emit => emit an event



customEmitter.on('response',(name,id)=>{
    console.log(`data received  user ${name} and id: ${id}`)
})

customEmitter.on('response',(name,id)=>{
    console.log(name,id)
})

customEmitter.emit('response','jhon',34)


// const http =  require('http')


// //Using eventEmitter API

// const server = http.createServer()

// //emits request event
// //subscribe to it / listen for ir / respond to it

// server.on('request',(req,res)=>{
//     res.end('Welcome')
// })

// server.on('other',(req,res)=>{
//     res.end('Another')
// })



// server.listen(5000)

// server.emit('request')
// server.emit('other')