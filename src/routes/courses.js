const express = require('express')
const router = express.Router()

const courseDetailController = require('../controllers/CourseDetailController')


router.get('/:slug', courseDetailController.slug)

module.exports = router