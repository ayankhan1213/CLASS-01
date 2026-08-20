// // var a = 10


// // module.exports = a


// var a = 10
// var b = 20
// var c = 100

// module.exports = {a : a , b : b , c : c}


const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})