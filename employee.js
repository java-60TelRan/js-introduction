//arrow function cannot be a method of an object
const empl1 = {name: "Vasya", basicSalary: 10000,
    computeSalaryFun: function() {
        return this.basicSalary
    },
    computeSalaryArrow: () => {
        return this.basicSalary;
    }
}
const salaryFun = empl1.computeSalaryFun();
const salaryArrow = empl1.computeSalaryArrow();
let a;