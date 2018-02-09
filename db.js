//interact with MongoDB by using the mongoose ODM
//a light layer on top of Mongo driver
var mongoose = require('mongoose');
//连接一个database地址
mongoose.connect('mongodb://localhost:27017/social', function () {
  console.log('mongodb connected');
});
// 暴露mongoose
module.exports = mongoose;
