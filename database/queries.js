const dbConnection = require('./client');

const list = (callback) => {
  dbConnection.query('SELECT * FROM tasks', (error, result) => {
    if (error) {
      callback(error);
      dbConnection.end();
    } else {
      callback(result.rows);
      dbConnection.end();
    }
  });
};

const add = (task, callback) => {
  const text = 'INSERT INTO tasks (task) VALUES($1) RETURNING *';
  dbConnection.query(text, [task], (error, result) => {
    if (error) {
      callback(error);
      dbConnection.end();
    } else {
      callback(result.rows);
      dbConnection.end();
    }
  });
};

const update = (action, id, callback) => {
  const text = `UPDATE tasks SET ${action}=true WHERE id=($1) RETURNING *`;
  dbConnection.query(text, [id], (error, result) => {
    if (error) {
      callback(error);
      dbConnection.end();
    } else {
      callback(result.rows);
      dbConnection.end();
    }
  });
};

module.exports = {
  list,
  add,
  update,
};
