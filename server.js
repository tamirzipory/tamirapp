const express = require('express') ;
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, 'build')))
app.get('/api', (req, res) =>{
    res.json({
        message: 'This is the api endpoint'
    })
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(5000, () =>
console.log('server running'))