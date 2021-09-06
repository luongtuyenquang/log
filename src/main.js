const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = process.env.port || 3000;
const Course = require('./models/Courses'); //import file models vào file main.js
const route = require('./routes/router')
const methodOverride = require('method-override')


const db = require('./config/database');

db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// app.use(morgan('combined'))


app.use(methodOverride('_method'))

app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
