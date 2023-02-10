const express = require('express')
const router = express.Router()
const fs = require('fs')
const routesPath = `${__dirname}/`
const { removeExtensionFromFile } = require('../middleware/utils')

// router.use('/upscale/', require('./auth'))

fs.readdirSync(routesPath).filter((file) => {
  const routeFile = removeExtensionFromFile(file)
  
  return routeFile !== 'index' && routeFile !== 'auth' && file !== '.DS_Store'
    ? router.use(`/upscale/${routeFile}`, require(`./${routeFile}`))
    : ''
})


router.get('/upscale/', (req, res) => {
  res.render('index')
})


router.use('*', (req, res) => {
  res.status(404).json({
    errors: {
      msg: 'URL_NOT_FOUND'
    }
  })
})

module.exports = router
