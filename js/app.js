/*file for all the angular-related js */
var app = angular.module('myApp', []);

app.controller('BaseController', ['$http', function($http) {
    var _this = this;
    var isMenuVisible = false;
    $http.get('js/portfolio.json')
    .success(function(data){
      console.log(data);
      console.log(_this);
      _this.projects = data;
    })
    .error(function(msg){
      console.log("Beep boop, something went wrong: \n" + msg);
    });
}
]);
