const express = require('express')
const router = express.Router()

const onlyPageController = require('../controllers/OnlyPageController')


router.use('/', onlyPageController.home)

module.exports = router