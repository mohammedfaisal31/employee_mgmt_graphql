// employeeController.js
const Employee = require('../models/Employee');

const employeeController = {
  getAllEmployees: async () => {
    return await Employee.find();
  },
  getEmployeeById: async (id) => {
    return await Employee.findById(id);
  },
  createEmployee: async (args) => {
    const employee = new Employee(args);
    await employee.save();
    return employee;
  },
  updateEmployee: async (id, data) => {
    const employee = await Employee.findByIdAndUpdate(id, data, { new: true });
    return employee;
  },
  deleteEmployee: async (id) => {
    return await Employee.findByIdAndDelete(id);
  },
  getEmployeesUnder30 : async () => {
    try {
      const employees = await Employee.find({ age: { $lt: 30 } });
      console.log(employees)
      return employees;
    } catch (error) {
      throw new Error("Error fetching employees under 30.");
    }
  },

  getEmployeesByHiringMethod : async (hiredThrough) => {
    try {
      const employees = await Employee.find({ "onBoardingDetails.hiredThrough": hiredThrough });
      return employees;
    } catch (error) {
      throw new Error(`Error fetching employees hired through ${hiredThrough}.`);
    }
  },

  getEmployeesByEmploymentStatus : async (employmentStatus) => {
    try {
      const employees = await Employee.find({ employmentStatus });
      return employees;
    } catch (error) {
      throw new Error(`Error fetching employees with employment status: ${employmentStatus}.`);
    }
  }


  
};

module.exports = employeeController;
