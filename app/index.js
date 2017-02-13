// app/index.js
const twoNodeDemo = require('./twoNodeDemo')

const nodesToAdd = [  
  "its raining",
  "I should pack an umbrella",
]

const result = twoNodeDemo.add(nodesToAdd)  
console.log(`The result is: ${result}`)  