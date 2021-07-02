const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('request event')
    res.end('Hello World')
})

server.listen(5000, ()=>{
    console.log('Server listening on port: 5000...')
})
//event loop, asyn patterns, event emitter and streams
// need to be sinked with work


//event loop is what allowes nodeJS to perform nonblocking i/o operations
//by offloading opearions to teh system kernel

// const _ = require('lodash');

// const items = [1,[2,[3,[4]]]]

// const newItems = _.flattenDeep(items)

// console.log(newItems,"probando hello gente")


// inscripcion => $4000
// materiales digitales => grab, sueldos, cisco => 3000
// parciales 4 x 1500
// examen final =>2500
// certificacion parcial => documento para verificar la educacion EFL => 950
// certificacion final => categoria nacional, con analitico  2800
// financiacion pago en cuotas => 8x 4500 
//              pago en contado=> 25000






