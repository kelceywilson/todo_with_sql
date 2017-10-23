const fs = require('fs');

const taskFile = process.env.NODE_ENV || './taskList.json';

const list = (callback) => {
  fs.readFile(taskFile, (err, data) => {
    if (err) throw err;
    const taskList = JSON.parse(data);

    // Calculate the lengths of longest id in order to create appropriate header length
    let idLength = 2;
    taskList.tasks.forEach((task) => {
      if (task.id.toString().length > idLength) {
        idLength = task.id.toString().length;
      }
    });

    // Build the task list message
    let message = `\nID${' '.repeat(idLength - 1)}Description`;
    message += `\n${'-'.repeat(idLength)} -----------`;
    taskList.tasks.forEach((element) => {
      message += `\n${element.id}${' '.repeat(idLength - element.id.toString().length + 1)}${element.task}`;
    });
    message += `\n\nYou have ${taskList.tasks.length} tasks\n`;

    callback(message);
  });
};

module.exports = list;
