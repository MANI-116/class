const express = require('express')
const app = express()
const port = 3000
function handleFirstRequest(req, res) {
    res.send("helloworld")
}

app.get('/', handleFirstRequest)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


function calculate(counter) {
    let sum = 0;
    for (let i = 1; i <= counter; i++) {
        sum += i;
    }
    return sum;
}

console.log(calculate(100));