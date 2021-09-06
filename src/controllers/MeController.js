const Course = require('../models/Courses')
const { multipleMongooseToObject } = require('../tools/mongoose')

class MeController {

    // GET /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render(('me/stored-courses'), { 
                    courses:  multipleMongooseToObject(courses)
                })
            })
            .catch(next);
    }
}

module.exports = new MeController