// 引用mongoose模组
var db = require('../db');
//create a Post model（class）
// 下面 等同于  var Post = mongoose.model( model_name, PostPrototype)
var Post = db.model('Post', {
  username: { type: String, required: true },
  body:     { type: String, required: true },
  date:     { type: Date,   required: true, default: Date.now }
});
//将model Post 暴露出去
module.exports = Post;
