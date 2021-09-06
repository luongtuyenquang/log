const express = require('express')
const router = express.Router()

const onlyPageController = require('../controllers/OnlyPageController')

router.use('/search', onlyPageController.search)
router.use('/', onlyPageController.home)

module.exports = router