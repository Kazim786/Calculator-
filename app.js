const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send(<input placeholder= 'Enter a number'></input>)
    res.send(<input placeholder= 'Enter a number'></input>)
})

app.listen(3000 () => {
    console.log('listening on port 3000');
})