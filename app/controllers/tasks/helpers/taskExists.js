const Task = require('../../../models/task')
const { buildErrObject, handleError } = require('../../../middleware/utils')

/**
 * Checks if a task already exists in database
 * @param {string} judul - judul of item
 */

const taskExists = (judul = '' ) => {
  return new Promise((resolve, reject) => {
    Task.findOne(
      {
        judul
      },
    ).then((reseponse) => {
      console.log('reseponse', reseponse)
      if( reseponse )
      {
        console.log('reseponse', reseponse)
        console.log('ada')
        return reject(buildErrObject(203, 'TASK_ALREADY_EXISTS'))
      }
      resolve(false);
      
    }).catch( (err) => {
      console.log(err)
      return reject(buildErrObject(203, 'ERROR'))
    })
  })
}

module.exports = { taskExists }
