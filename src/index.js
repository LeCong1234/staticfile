const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');


const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));
// app.set("views", "./views");

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/new', (req, res) => {
    res.render('new');
});

app.listen(3000, () => {
    console.log(`http://localhost:3000`);
});