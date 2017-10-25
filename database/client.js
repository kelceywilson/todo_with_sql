// this module makes a connection to a database.
// use dbConnection to connect to the db to do queries

const { Client } = require('pg');

const connectionString = 'postgresql://localhost:5432/todoSql';

const dbConnection = new Client({ connectionString });

dbConnection.connect();

module.exports = dbConnection;
