const Task = require('../../../models/task')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Gets all items from database
 */
const getAllItemsFromDB = () => {
  return new Promise((resolve, reject) => {
    Task.find(
      {},
      '-updatedAt -createdAt',
      {
        sort: {
          path: 1
        }
        
      },
      (err, items) => {
        if (err) {
          return reject(buildErrObject(203, err.message))
        }
        resolve(items)
      }
    )
  })
}

module.exports = { getAllItemsFromDB }
