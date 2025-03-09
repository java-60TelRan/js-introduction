import {testframework} from './testframework.js'


testframework("computeSalary testing", 'const empl = new Employee("name1",12000, "DEP1");' +
  'const wageEmpl = new WageEmployee("name2", 10000, "DEP1", 100, 50);' +
  'const manager = new Manager("name3", 10000, "DEP2", 2)',
['empl.computeSalary()', 'wageEmpl.computeSalary()', 'manager.computeSalary()'],
[12000, 15000, 20000])


