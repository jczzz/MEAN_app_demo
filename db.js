//interact with MongoDB by using the mongoose ODM
//a light layer on top of Mongo driver
var mongoose = require('mongoose');
// declare a database, and make a connection
mongoose.connect('mongodb://localhost:27017/social', function () {
  console.log('mongodb connected');
});
// 模组暴露=mongoose
module.exports = mongoose;
