const path = require('path');
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './dist/index.html'))) // send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
