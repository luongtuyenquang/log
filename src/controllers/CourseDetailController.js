const Course = require('../models/Courses')
const { mongooseToObject } = require('../tools/mongoose')

class CourseDetailController {

    slug(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then(course => {
                res.render('courses/courseDetail', { course: mongooseToObject(course) })
            })
            .catch(next)
    }

}

module.exports = new CourseDetailController