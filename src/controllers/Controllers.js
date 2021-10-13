const Course = require('../models/Courses')

class OnlyPageController {

    home(req, res, next) {
        Course.find({})
            .then(courses => res.render('home', {courses}))
            .catch(next);
    }

}

module.exports = new OnlyPageController