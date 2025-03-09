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
        //TODO
        //take department name
        //returns total salary of all employees working in the given department
    }
    getEmployeesMaxSalary() {
        //TODO
        //returns array of employees with maximal salary
    }
    getEmployeesDepartment(department) {
        //TODO
        //returns array of employees working in the given department
    }
}