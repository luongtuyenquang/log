
class NewController {

    // GET /news
    index(req, res) {
        res.render('news');
    }

    // GET /news/slug
    slug(req, res) {
        res.send('new detail')
    }
}

module.exports = new NewController