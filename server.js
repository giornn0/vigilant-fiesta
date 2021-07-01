const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page :)')
    }
    if(req.url === '/about'){
        res.end('This is a testing nodeJS server')
    }
    
    res.end(`
        <h1>Ooops!</h1>
        <p>Page not found -.-</p>
        <a href="/">back back</a>
    `)
})

server.listen(5000)

// # lista_1=[1,2,3,4]
// # lista_2=["uno","dos","tres","cuatro"]

// # dict  = {}

// # for string, number in enumerate(zip(lista_2,lista_1)):
// #     print(string,number[1])
// #     # dict[string]=number
// # string = "gano ${0}".format(1000)


// # students_dict = { 
// #                     "Joel Corry" : 70,
// #                     "James Bond" : 90,
// #                     "Fatma Ahmed": 20,
// #                     "Lily Saqr"  : 94,
// #                     "Ahmed Yan"  : 40,
// #                 }
// # passed_students_names = [name.split(" ")[0] for name,grade in zip(students_dict.keys(),students_dict.values()) if grade > 50 ]
// # print(passed_students_names)

// # iter to create a iterator from an iterable