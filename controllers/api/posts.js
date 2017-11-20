var router = require('express').Router();
var Post = require('../../models/post');

//从server.js抽离

//处理http GET 请求
router.get('/posts', function (req, res, next) {
  //调用Post model里的 find()
  Post.find()
  .sort('-date')
  .exec(function (err, posts) {
    if (err) { return next(err) };
    res.json(posts);
  });
});

router.post('/posts', function (req, res, next) {
  // 接收post request object
  //create an instance of Post model
  // create a document
  var post = new Post({
    username: req.body.username,
    body:     req.body.body,
  });
  // save the document
  post.save(function (err, post) {
    if (err) { return next(err) };
    //保存成功后，发回成功信息，返回该post document
    res.status(201).json(post);
  });
});

module.exports = router;
