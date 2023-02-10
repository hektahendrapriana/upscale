const Task = require('../../models/task')
const { createItem } = require('../../middleware/db')
const { handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { taskExists } = require('./helpers')

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createTask = async (req, res) => {
  try {
    req = matchedData(req)
    const createData = req;
    
    const doesTaskExists = await taskExists(createData.judul)
    if (!doesTaskExists) {
      res.status(201).json(await createItem(createData, Task))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createTask }
