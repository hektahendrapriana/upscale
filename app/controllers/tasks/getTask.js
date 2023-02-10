const { matchedData } = require('express-validator')
const Task = require('../../models/task')
const { getItem } = require('../../middleware/db')
const { isIDGood, handleError } = require('../../middleware/utils')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getTask = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    res.status(200).json(await getItem(id, Task, '', ''))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getTask }
