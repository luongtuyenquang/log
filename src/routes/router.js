const newsRouter = require('./news')
const meRouter = require('./me')
const coursesDetailRouter = require('./courses')
const onlyPageRouter = require('./OnlyPage')


function route(app) {

    app.use('/news', newsRouter)
    app.use('/me', meRouter)
    app.use('/courses', coursesDetailRouter)
    app.use('/', onlyPageRouter)
    
}

module.exports = route