module.exports = class Employee {
    constructor(salaryParam) {
        this.salary = salaryParam
    }

    work() {
        console.log("i am working")
    }

    addSalary(s) {
        this.salary += parseInt(s)
    }

    getSalary() {
        return `i am very happy to ear ${this.salary}`
    }
}