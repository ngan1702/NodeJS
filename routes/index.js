var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BÉ TẬP TÍNH' });
});

router.post('/', (req, res)=> {
  const expr1 = req.body.expr1;
  const expr2 = req.body.expr2;
  res.render('index', { title: 'BÉ TẬP TÍNH', expr1, expr2, result });
});

module.exports = router;
