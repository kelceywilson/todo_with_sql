const expect = require('chai').expect;
const { db, pgp } = require('../database/db_connection.js');
const { addUser } = require('../database/db_utilities.js');

const resetDB = () => db.any('TRUNCATE TABLE users RESTART IDENTITY');
const seedDB = () => db.any('INSERT INTO USERS (email, password) VALUES ($1, $2)', ['bonnie@bonnie', 'bonnie']);
const initDB = () => resetDB.then(seedDB);

describe('addUser()', () => {
  const email = 'new@new';
  const pass = 'new';
  
  beforeEach('reset the database', () => {
    return initDB()
    .then(addUser(email, pass))
  })
  it('does something', () => {
    .then(() => {
      db.one('SELECT * FROM ');
    });
  });
});
