// package.json a manifest file that stores important information about project/package

//manual => creating a fila called package.json in the root, create properties etc

//running npm init and step by step 

//running npm init -y

const _ = require('lodash');

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)