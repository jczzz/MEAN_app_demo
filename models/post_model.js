// 引用mongoose模组
var db = require('../db');
var Schema = db.Schema;
//create a Post model（class）
// var Post = mongoose.model( model_name, PostPrototype)
var PostShema = new Schema({
  username: { type: String, required: true },
  body:     { type: String, required: true },
  date:     { type: Date,   required: true, default: Date.now }
});
var Post = db.model('Post', PostShema );
//将model Post 暴露出去
module.exports = Post;
