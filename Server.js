const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/store', (req, res) => {
    try {
        const data = req.body.toString()
        const args = data.split(",")
        if (args.length === 2 && parseInt(args[0]) && parseInt(args[1])){
            fs.writeFileSync('args.txt', data)
            res.status(200).send('Argument saved')
        }
        else{
            res.status(400).send("Invalid Input");
        }  
    } catch (err) {
        console.error(err)
        res.status(400).send("Invalid Input");
    }
})
app.get('/add', (req, res) => {

    try {
        const data = fs.readFileSync('args.txt', 'utf8')
        const args = data.split(",")
        console.log(data)
        var arg1 = parseInt(args[0])
        var arg2 = parseInt(args[1])
        res.status(200).send("Addition - " + (arg1 + arg2))
    } catch (err) {
        //console.error(err)
        res.status(404).send("Arguemnet not found. Please send argument using sendargs api");
    }
})

app.get('/sub', (req, res) => {

    try {
        const data = fs.readFileSync('args.txt', 'utf8')
        const args = data.split(",")
        console.log(data)
        var arg1 = parseInt(args[0])
        var arg2 = parseInt(args[1])
        res.status(200).send("Subtraction - " + (arg1 - arg2))
    } catch (err) {
        res.status(404).send("Arguemnet not found. Please send argument using sendargs api")
    }
})
app.get('/mul', (req, res) => {

    try {
        const data = fs.readFileSync('args.txt', 'utf8')
        const args = data.split(",")
        console.log(data)
        var arg1 = parseInt(args[0])
        var arg2 = parseInt(args[1])
        res.status(200).send("Multiplication - " + (arg1 * arg2))
    } catch (err) {
        res.status(404).send("Arguemnet not found. Please send argument using sendargs api")
    }
})
app.get('/div', (req, res) => {

    try {
        const data = fs.readFileSync('args.txt', 'utf8')
        const args = data.split(",")
        console.log(data)
        var arg1 = parseInt(args[0])
        var arg2 = parseInt(args[1])
        res.status(200).send("Division - " + (arg1 / arg2))
    } catch (err) {
        res.status(404).send("Arguemnet not found. Please send argument using sendargs api")
    }
})
app.listen(port, () => {
    console.log('app listening at http://localhost:${port}')
})