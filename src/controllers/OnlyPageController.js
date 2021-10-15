const Course = require('../models/Courses')
const { multipleMongooseToObject } = require('../tools/mongoose')

class OnlyPageController {

    home(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render(('home'), { 
                    courses:  multipleMongooseToObject(courses)
                })
            })
            .catch(next);
    }
}

module.exports = new OnlyPageController