const fs = require('fs');

const add = (newTask) => {
  fs.readFile('./taskList.json', (err, data) => {
    if (err) throw err;
    const taskList = JSON.parse(data);
    const newTaskId = taskList.nextId;
    taskList.tasks.push({ id: newTaskId, task: newTask });
    taskList.nextId += 1;
    fs.writeFile('./taskList.json', JSON.stringify(taskList), (err2) => {
      if (err2) throw err2;
    });
    console.log(`Created task ${newTaskId}`);
  });
};

module.exports = add;
