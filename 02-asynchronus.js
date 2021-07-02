// const {readFile} = require("fs");


// readFile('./content/first.txt','utf8',(err,data)=>{
//     if(err){
//         return
//     }
//     else{
//         console.log
//     }
// })

const {readFile, writeFile} = require("fs").promises
// const util = require('util');

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)




// const getText = (path)=>{
//     return new Promise((resolve,reject)=>{
        
//     readFile(path,'utf8',(err,data)=>{
//         if(err){
//             reject(err)
//             return
//         }
//         else{
//             resolve(data)
//         }
//     })
//     })
// }

// getText('./content/first.txt')
//     .then((result)=> console.log(result))
//     .catch((error)=>console.log(error))

const start = async()=>{
    try{
        const first = await readFile('./content/first.txt','utf8');
        const second = await readFile('./content/second.txt','utf8');
        await writeFile('./content/result-mind-grenade.txt',` \nThis is awesome: ${first} ${second}`,{flag: 'a'})
    }
    catch(error){
        console.log(error)
        
    }
    }
    

start()

//make promise to make two action at the same time
//async await let you do step by step :)