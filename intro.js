// REPL read evaluate print loop

// CLI running app code in code =<always using cli

// 1 ) node
// 	console of node
	
// 2) new folder =>
// ...  app.js
// Globals => NO WINDOWS!!!
// __dirname -path to current directory
// __filename -file name
// require -function to use modules (Common JS)
// module -info about current module(file)
// process -info about env where the program is being executed

console.log(__dirname)

setInterval(()=>{
    console.log('Hello World')
},1000)

