
// Express with Middleware tutorial
const express = require('express')  
const app = express()
const port = 3000

app.use((request, response, next) => {  
  console.log(request.headers)
  next()
})

app.use((request, response, next) => {  
  request.chance = Math.random()
  next()
})

app.get('/', (request, response) => {  
  response.json({
    chance: request.chance
  })
})

app.listen(port)  


/////////////////////////////////////////////////////////////////////////
// Express tutorial
// const express = require('express')  
// const app = express()  
// const port = 3000

// app.get('/', (request, response) => {  
//   response.send('Hello from Express!')
// })

// app.listen(port, (err) => {  
//   if (err) {
//     return console.log('something bad happened', err)
//   }

//   console.log(`server is listening on ${port}`)
// })

/////////////////////////////////////////////////////////////////////////
// Node server tutorial
// const http = require('http')  
// const port = 3000

// const requestHandler = (request, response) => {  
//   console.log(request.url)
//   response.end('Hello Node.js Server!')
// }

// const server = http.createServer(requestHandler)

// server.listen(port, (err) => {  
//   if (err) {
//     return console.log('something bad happened', err)
//   }

//   console.log(`server is listening on ${port}`)
// })

/////////////////////////////////////////////////////////////////////////
// npm tutorial
// const _ = require('lodash')

// _.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });  
// → { 'a': 1, 'b': 2, 'c': 3 }

/////////////////////////////////////////////////////////////////////////
//Intro to node tutorial
// require('./app/index')  