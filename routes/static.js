var express = require('express');
var router  = express.Router();

//从server.js抽离

//这里是啥  
router.use(express.static(__dirname + '/../public'));

router.get('/', function (req, res) {
  // render/ejs is now easier to use since
  // sendFile has security restrictions on relative pathing
  res.render('posts.html.ejs');
});

module.exports = router;
