const os = require('os')

//info about the current user

const user = os.userInfo()
console.log(user)

//method return the system uptime in seconds

console.log(`El sistema lleva ${os.uptime()} segundos encenddido`)

const currentOS = {
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOS)