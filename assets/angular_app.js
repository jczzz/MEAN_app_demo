var app = angular.module('app', []);



//when defining a filter, add PostsSvc as dependency inject
app.controller('PostsCtrl', function ($scope, PostsSvc) {
  // controller，做两个两个部分事
  
  //第一部分  添加一个post到服务器，同时也将这个Post 添加到$scopt.posts array中
  //这个数组数据绑定在view页面里
  $scope.addPost = function () {
    if ($scope.postBody) {

      /*
      $http.post('api/post',{
        username: 'dickeyxxx',
        body:     $scope.postBody
      }).succss(function(post){
        $scope.posts.unshift(post)
        $scope.postBody = null
      })
      */

      //create(post)内参数是一个绑定了data model的post
      PostsSvc.create({
        username: 'Jesse zha',
        body:     $scope.postBody
      })
      //promises are a way of writing asynch code in javaScript
      /*post = {
        username: 'dickeyxxx',
        body:     $scope.postBody
        }
      */
      // 你正在做的是发送post object/json 给server， if it responds with a success status code(201)
      // you unshift the received post onto $scope.posts  将从服务器发来的数据 post 加入$scopt.posts array
      .success(function (Recev_post) {
        //那个post参数也被注入$scope.posts数组里
        $scope.posts.unshift(Recev_post);
        $scope.postBody = null;
      });
    };
  };

  //第二部分   发送一个请求 抓取所有保存在服务器的过去posts
  // 接收这些data, 存入在$scopt.posts array
  // view页面 可以显示这些posts
  PostsSvc.fetch()
  /*
   fetch = function () {
    $http.get('/api/posts');
   };
   */
  // 你正在做的是发送http GET请求给server， if it responds with a success status code
  // 你将 response(posts)  注入 $scope.posts 数组
  .success(function (response) {
    //replace the $scope.posts array with an array(response) 
    //you get from the API via $http
    $scope.posts = response;
  });

});




//controller外部，制定定义一个服务(obejct)，将其注入controller中
//firstly custom a service: PostsSvc
app.service('PostsSvc', function ($http) {
  //定义该服务的method
  this.fetch = function () {
    //调用一个angular内置服务  $http
    return $http.get('/api/posts')
  };
  this.create = function (post) {
    //post(url, data(request content))
    return $http.post('/api/posts', post)
  };
});
