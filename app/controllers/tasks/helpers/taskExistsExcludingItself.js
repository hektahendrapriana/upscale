const Task = require('../../../models/task')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a task already exists excluding itself
 * @param {string} id - id of item
 * @param {string} judul - judul of item
 */
const taskExistsExcludingItself = (id = '', judul = '') => {
  return new Promise((resolve, reject) => {
    Task.findOne(
      {
        judul,
        _id: {
          $ne: id
        }
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(203, err.message))
        }

        if (item) {
          return reject(buildErrObject(203, 'TASK_ALREADY_EXISTS'))
        }

        resolve(false)
      }
    )
  })
}

module.exports = { taskExistsExcludingItself }
