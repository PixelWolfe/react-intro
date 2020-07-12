const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const gallery = require('./routes/gallery.router.js');
const flip = require('./routes/flip.router')
const PORT = process.env.PORT || 5000;


app.use(bodyParser.urlencoded({extended: true}));
/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/gallery', gallery);
app.use('/flip', flip)

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});