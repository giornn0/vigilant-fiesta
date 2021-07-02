//streams in nodeJS
/* 
Writeable => to writ e abunch data sequently
readable => to read data sequently
duplex => to do both things
transform => where data can be modified while reading or writing

*/

const {createReadStream} = require("fs");

const stream = createReadStream('./content/big.txt',{highWaterMark:90000,encoding:'utf8'})

stream.on('data',(result)=>{
    console.log(result)
})

stream.on('error',(error)=>{
    console.log(error)
})

//event data => chunks the data
//event open
//event close, etc