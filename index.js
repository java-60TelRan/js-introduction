import { testframework } from "./testframework.js";

import WageEmployee from "./WageEmployee.js";
import Manager from "./Manager.js";
//writing tests for all Company methods

testframework(
  "Company methods testing",
  "const company = new Company();" +
    'company.addEmployee(new Employee("name1", 10000, "Dep1"));' +
    'company.addEmployee(new WageEmployee("name2", 10000, "Dep1", 100, 100));' +
    'company.addEmployee(new Manager("name3", 10000, "Dep2", 2));',
    ['!!company.employees.name1 && !!company.employees.name2 && !!company.employees.name3',
        'company.deleteEmployee(new Employee("name3")); !!company.employees.name3',
        'company.getDepBudget("Dep1")',
        'company.getEmployeesMaxSalary()',
        'company.getEmployeesDepartment("Dep2")'
    ],
    [true, false, 30000, [new WageEmployee("name2", 10000, "Dep1", 100, 100),
        new Manager("name3", 10000, "Dep2", 2)], [new Manager("name3", 10000, "Dep2", 2)]
    ]
);
