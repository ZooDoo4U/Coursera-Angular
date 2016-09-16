(function()
{
    'use strict';
//    alert("hello");

    var app = angular.module('myFirstApp',[]);
    app.controller( 'myFirstController',myFirstController );
        

    function myFirstController( $scope )           
    {
        $scope.MyName = "Sir Dano";        
    }

    var activateOrder= function() 
    {
        console.log("Order activated.");
    };
    activateOrder();


//   var app = angular.module("myFirstApp",[]);
//   app.controller( "myFirstController", function(params) {
//});
    
})(); 




