const express = require('express')
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html')
})

// app.post('/bmicalculator', (req, res) => {
//     let n1 = Number(req.body.weight);
//     let n2 = Number(req.body.height);
//     result = n1 + n2 
//     res.send(`Your BMI is ${result}`)

// })

app.post('/', (req, res) => {

    let n1 = Number(req.body.numb1)
    let n2 = Number(req.body.numb2)
    sum = n1 + n2
    res.send("The result of that calculation is " + sum)
})

app.post('/bmicalculator', (req, res) => {
    let n1 = Number(req.body.weight);
    let n2 = Number(req.body.height);
    let bmi = n1 / (n2 * n2);
    res.send(`Your BMI is ${bmi}`)

})

app.listen(3002, () => {
    console.log('listening on port 3000');
})