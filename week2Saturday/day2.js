const express = require('express')
let bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.json());


function middleWare1(req, res, next) {
    console.log(req.headers.counter);

    next();
}

app.use(middleWare1);
function handleFirstRequest(req, res) {
    res.send("helloworld")
}


app.get('/', handleFirstRequest)

app.post('/handleSum', handleFirstRequest);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

function handleFirstRequest(req, res) {
    let counter = req.body.counter;

    if (counter < 10000) {
        let sum = calculate(counter);
        res.send("" + sum);
    } else {
        res.status(404).send("you send the larger number");
    }
}

function calculate(counter) {
    let sum = 0;
    for (let i = 1; i <= counter; i++) {
        sum += i;
    }
    return sum;
}

console.log(calculate(100));