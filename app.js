// app.js
const Employee = require('./classes/Employee')

const express = require('express')
const app = express()
const hbs = require('hbs')
const path = require('path')
const bodyParser = require('body-parser').json();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    //endpoint computations
    ///error management
    res.status(200).json({ "employee": "sito", "salary": Math.random() + 40000 })
})

app.get('/employee/:id/:newSalary', function (req, res) {
    console.log(req.params)
    let allEmployees = [new Employee(60000), new Employee(30000), new Employee(50000), new Employee(60000), new Employee(150000)]
    
    //please, don't forget to review the sent parameters as they could be malicious
    //consider using something like sanitizing
    const id = req.params.id
    const newSalary = req.params.newSalary
    const cEmployee = allEmployees[id]

    cEmployee.addSalary(newSalary)

    let output = { "employee":  cEmployee.getSalary()}

    ///error management
    res.status(200).json(output)
})

app.post('/student', bodyParser, function (req, res){
    console.log(req.body)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))