// employeeResolvers.js
const employeeController = require('../controllers/employeeController');

const employeeResolvers = {
  Query: {
    employees: () => employeeController.getAllEmployees(),
    employee: (_, { id }) => employeeController.getEmployeeById(id),
    employeesUnder30: async (_, __) => {
        return employeeController.getEmployeesUnder30();
      },
      employeesByHiringMethod: async (_, { hiredThrough }) => {
        return employeeController.getEmployeesByHiringMethod(hiredThrough);
      },

      employeesByEmploymentStatus: async (_, { employmentStatus }) => {
        return employeeController.getEmployeesByEmploymentStatus(employmentStatus);
      },
  },
  Mutation: {
    createEmployee: (_, args) => employeeController.createEmployee(args),
    updateEmployee: (_, { id, ...rest }) => employeeController.updateEmployee(id, rest),
    deleteEmployee: (_, { id }) => employeeController.deleteEmployee(id),
  },
};

module.exports = employeeResolvers;
