//Object.keys() returns array of keys
//Object.values() returns array of values
export default class Company {

    constructor() {
        this.employees = {} //key - name (unique name value), value - employee object (either Employee, or WageEmployee, or Manager)
    }
    addEmployee(empl) {
        this.employees[empl.name] = empl;
    }
    deleteEmployee (empl) {
        delete this.employees[empl.name];
    }
    getDepBudget(department) {
        //take department name
        //returns total salary of all employees working in the given department
        const budgetRes = this.getEmployeesDepartment(department)
        .reduce((acc, cur) => acc + cur.computeSalary(), 0);
        return budgetRes;
    }
    getEmployeesMaxSalary() {
        const allEmployees = Object.values(this.employees);
        const maxSalary = Math.max(...allEmployees.map(e => e.computeSalary()));
        const employeesRes = allEmployees.filter(e => e.computeSalary() == maxSalary);
        return employeesRes;
        
    }
    getEmployeesDepartment(department) {
        const employeesRes = Object.values(this.employees)
        .filter(empl =>empl.department === department);
        return employeesRes;

    }
}