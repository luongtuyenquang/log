const express = require('express')
const router = express.Router()

const newController = require('../controllers/NewsController')

router.use('/:slug', newController.slug)
router.use('/', newController.index)

module.exports = router