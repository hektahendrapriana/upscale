const { createTask } = require('./createTask')
const { deleteTask } = require('./deleteTask')
const { getAllTasks } = require('./getAllTasks')
const { getTask } = require('./getTask')
const { getTasks } = require('./getTasks')
const { updateTask } = require('./updateTask')

module.exports = {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  getTasks,
  updateTask
}
