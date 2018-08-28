const path           = require('path');
const express        = require('express');
const router         = express.Router();
const bodyParser     = require('body-parser');
const { create_key } = require('./token');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use((req, res, next) => {
    console.log('Something is happening.....');
    next();
});

router.get('/map', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/style', (req, res) => {
    res.sendFile(path.join(__dirname+'/style.json'));
});

router.post('/create-token', (req, res) => {
    const name = req.body.name;
    create_key(name, function (data) {
        res.send(data)
    });
});

module.exports = router;