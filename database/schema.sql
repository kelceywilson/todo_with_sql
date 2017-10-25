DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  task varchar(255) NOT NULL,
  completed boolean DEFAULT false,
  deleted boolean DEFAULT false
);
