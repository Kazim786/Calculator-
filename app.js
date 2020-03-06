const express = require('express')
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


app.post('/', (req, res) => {

    n1 = Number(req.body.numb1)
    n2 = Number(req.body.numb2)
    sum = n1 + n2
    res.send("The result of that calculation is " + sum)
})

app.listen(3002, () => {
    console.log('listening on port 3000');
})