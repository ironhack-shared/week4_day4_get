// app.js
const Employee = require('./classes/Employee')

const express = require('express')
const app = express()
const hbs = require('hbs')
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

let victor = new Employee('victor', 85000, 'a++');

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

app.post('/student', function (req, res){
    victor.updateSalary(req.body.salary)
    victor.updateName(req.body.name)
    victor.updateGrade(req.body.grade)

    res.status(200).json({updatedSuccessfully: true, data: {...victor.getEmployeeDetails()}})
})

app.get('/registro', function(req, res) {
    res.render('login')
})

app.post('/juan', function(req, res) {
    // console.log('xxxxx')
    // console.log(req.body.email)
    // console.log(req.body.password)
    // console.log('xxxxx')

    let viewData = {email: req.body.email, password: req.body.password}

    res.render('success', {viewData})
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))