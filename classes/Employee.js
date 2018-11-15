module.exports = class Employee {
    constructor(nameParam, salaryParam, gradeParam) {
        this.salary = salaryParam
        this.name = nameParam
        this.grade = gradeParam
        this.id = Math.floor(Math.random() * 10000)
    }

    work() {
        console.log("i am working")
    }

    updateName(name) {
        this.name = name
    }

    updateSalary(s) {
        this.salary = s
    }

    updateGrade(g) {
        this.grade = g
    }

    addSalary(s) {
        this.salary += parseInt(s)
    }

    getSalary() {
        return `i am very happy to ear ${this.salary}`
    }

    getEmployeeDetails() {
        return {
            id: this.id,
            name: this.name,
            salary: this.salary,
            grade: this.grade
        }
    }
}