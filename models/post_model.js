// 引用mongoose模组
var db = require('../db');

//create a Post model（class）
// var Post = mongoose.model( model_name, PostPrototype)
var PostShema = new db.Schema({
  username: { type: String, required: true },
  body:     { type: String, required: true },
  date:     { type: Date,   required: true, default: Date.now }
});
var Post = db.model('Post', PostShema );
//暴露Post model
module.exports = Post;
