const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/add/:numb1/:numb2', (req, res) => {
    var n1 = parseFloat(req.params.numb1);
    var n2 = parseFloat(req.params.numb2);
    let sum = n1 + n2
    res.send(`Total of ${n1} & ${n2} is ${sum}`)
})

app.post('/', (req, res) => {
    
})

app.listen(3002, () => {
    console.log('listening on port 3000');
})