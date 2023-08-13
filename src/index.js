const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schemas/employeeSchema');
const resolvers = require('./resolvers/employeeResolver');
const connectDB = require('./config/db-config');

const server = new ApolloServer({ typeDefs, resolvers });

//Connect to MongoDB Database
connectDB(); 

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});
