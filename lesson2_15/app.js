// lecture 19 
// Part 4


(function()
{
    'use strict';
    angular.module('ControlerAsApp',[])
    .controller( 'ParentController', ParentController)
    .controller( 'ChildController',  ChildController);

    //  
    //  Defend again minification errors...
    ParentController.$inject = ['$scope' ];

    function ParentController($scope) 
    {
        var parent = this;
        parent.value=1
//        $scope.parentValue=333;
//        $scope.pc = this;
//        $scope.pc.parentValue=1;
    };

    ChildController.$inject =  ['$scope' ];
    function ChildController($scope) 
    {
        var child = this;
        child.value = 333  ; 
        console.log("childController2 $scope: ", $scope);
        console.log("childController2 'this': ", this);

//        console.log("$scope.parentValue:" , $scope.parentValue);
//        console.log("Child $scope", $scope);
//
//        $scope.parentValue=5;
//        console.log("*** CHANGED: $scope.parentValue =5;***");
//        console.log("$scope.parentValue",$scope.parentValue);
//        console.log($scope);
//
//        console.log("$scope.pc.parentValue = ", $scope.pc.parentValue );
//        $scope.pc.parentValue=3333333;
//        console.log("*** CHANGED: $scope.pc.parentValue   = ",$scope.pc.parentValue);
//        console.log("$scope.parentValue",$scope.parentValue);
//        console.log($scope);
//
//
//        console.log("*** CHANGED: $scope.pc.parentValue =5;***");
//        console.log("$scope.pc.parentValue",$scope.pc.parentValue);
//


    };

})(); 

