const express = require('express')
const router = express.Router()
// require('../../config/passport')
// const passport = require('passport')
// const requireAuth = passport.authenticate('jwt', {
//   session: false
// })
const trimRequest = require('trim-request')

const {
  getAllTasks,
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
} = require('../controllers/tasks')

const {
  validateCreateTask,
  validateGetTask,
  validateUpdateTask,
  validateDeleteTask
} = require('../controllers/tasks/validators')

router.get('/all', 
  // requireAuth,
  trimRequest.all,
  getAllTasks
)

router.get(
  '/',
  // requireAuth,
  trimRequest.all,
  getTasks
)

router.post(
  '/',
  // requireAuth,
  trimRequest.all,
  validateCreateTask,
  createTask
)

router.get(
  '/:id',
  // requireAuth,
  trimRequest.all,
  validateGetTask,
  getTask
)

router.patch(
  '/:id',
  // requireAuth,
  trimRequest.all,
  validateUpdateTask,
  updateTask
)

router.delete(
  '/:id',
  // requireAuth,
  trimRequest.all,
  validateDeleteTask,
  deleteTask
)

module.exports = router
