(function()
{
    'use strict';
//    alert("hello");
      
    var app = angular.module("myFirstApp",[]);
    app.controller( "myFirstController", function($scope) {
    $scope.name = "Dano";
//    $scope.sayHello  = function() { return "Hello " + $scope.name;}
});
    
})(); 
