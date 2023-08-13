// employeeSchema.js
const { gql } = require('apollo-server');

const typeDefs = gql`
    type Employee {
    id: ID!
    name: String!
    age: Int!
    fatherName : String!
    position: String!
    department: String!
    managerId : ID!
    contact : EmployeeContact! 
    kyc : EmployeeKYC!
    onBoardingDetails : OnBoardingDetails! 
    loginCredentials : EmployeeLoginCredentials! 
    compensation : EmployeeCompensation!
    employmentStatus : EmploymentStatus!
    employeeAssetsAllocations : EmployeeAssetsAllocations!
    employeeLeaveBalancesForCurrentYear : Int!
      
}
  
  type EmployeeLoginCredentials {
    loginID : String!
    password : String!
  }
  
  enum EmploymentStatus {
    ACTIVE
    ON_LEAVE
    TERMINATED
  }

  type EmployeeCompensation {
    salary : String!
    perks : String!
  }

  type EmployeeKYC {
    PAN: String!
    AADHAR: String!
    
  }
  type OnBoardingDetails {
    hiredThrough : HiringOption!
    dateOfJoining : String!
    
  }

  enum HiringOption{
    COMPANY_PORTAL
    REFERNCE
    CAMPUS_PLACEMENT
  }
  type EmployeeAssetsAllocations {
    deskId : ID
    chairId : ID
    PCAlloted : Boolean
    PC_ID : ID
    lockerAlloted : Boolean
    lockerID : ID
  }

  type EmployeeContact {
    phone: String!
    email: String!
    portfolio: String
    emergencyPhone : String!
    instagramURL : String
    facebookURL : String
    twitterURL : String
    snapChat : String

  }

  type Query {
    employees: [Employee]
    employee(id: ID!): Employee
    employeesUnder30 : [Employee]
    employeesByHiringMethod(hiredThrough : String!) : [Employee]
    employeesByEmploymentStatus (employmentStatus : String!) : [Employee]
  }

  type Mutation {
    createEmployee(name: String!, age: Int!, position: String!, department: String!): Employee
    updateEmployee(id: ID!, name: String, age: Int, position: String, department: String): Employee
    deleteEmployee(id: ID!): Employee
  }
`;


module.exports = typeDefs;
