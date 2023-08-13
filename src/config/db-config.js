// db.js
const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/employee-db', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
}

module.exports = connectDB;
