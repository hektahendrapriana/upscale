const Task = require('../../models/task')
const { updateItem } = require('../../middleware/db')
const { isIDGood, handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { taskExistsExcludingItself } = require('./helpers')
/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateTask = async (req, res) => {
  try {
    req = matchedData(req)

    const updateData = req;
    
    const id = await isIDGood(req.id)
    const doesTaskExists = await taskExistsExcludingItself(id, updateData.judul)
    if (!doesTaskExists) {
      res.status(200).json(await updateItem(id, Task, updateData))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateTask }
