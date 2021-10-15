const coursesDetailRouter = require('./courses')
const onlyPageRouter = require('./OnlyPage')


function route(app) {

    app.use('/courses', coursesDetailRouter)
    app.use('/', onlyPageRouter)
    
}

module.exports = route