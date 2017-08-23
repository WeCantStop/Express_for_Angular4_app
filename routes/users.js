var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('halo');
});

const resData = {
    code: 0,
    data: {
        name: '多多',
        age: 88,
        gender: 'female'
    },
    message: '操作成功',
    status: 'OK',
    success: true
};

/** /users/queryDuoDuo  get **/
router.post('/queryDuoDuo', function (req, res, next) {
    res.send(resData);
});

/** /users/age  post **/
router.get('/age', function (req, res, next) {
    res.send(resData);
});

module.exports = router;
