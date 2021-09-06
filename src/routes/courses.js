const express = require('express')
const router = express.Router()

const courseDetailController = require('../controllers/CourseDetailController')

router.get('/create', courseDetailController.create)
router.post('/store', courseDetailController.store)
router.get('/:id/edit', courseDetailController.edit)
router.put('/:id/', courseDetailController.update)
router.delete('/:id/', courseDetailController.delete)
router.get('/:slug', courseDetailController.slug)

module.exports = router