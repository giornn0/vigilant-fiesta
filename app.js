console.log('stream example')

var http =  require('http');

var fs = require('fs');


// http
//     .createServer(function(req,res){
//         const text = fs.readFileSync('./content/big.txt','utf8')

//         res.end(text)

//     })
//     .listen(5000)

//Esto manda el archivo entero,
//por eso usamos streams :)
//the trasfers encoding headers needs to be chunked

http.createServer(function(req,res){
    const fileStream  = fs.createReadStream('./content/big.txt','utf8')
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(error)=>{
        console.log(error)
    })
})
.listen(5000)

//bunch of request -.-
//payload ???
