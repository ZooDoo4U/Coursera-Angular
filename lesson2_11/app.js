(function()
{
    'use strict';
    angular.module('BindingApp',[])
    .controller( 'BindingController', BindingController);

    //  
    //  Defend again minification errors...
    BindingController.$inject =  ['$scope' ];
        
    function BindingController($scope) 
    {
        $scope.firstName ='Dano';
        $scope.lastName = "Doris"; 
//        $scope.fullName = "<not set>";

        $scope.setFullName = function() 
        {
            $scope.fullName = $scope.lastName + "," + 
                              $scope.firstName;                        
        }

        $scope.showNumberOfWatchers = function() { console.log($scope.$$watchersCount);}
        $scope.logFirstName = function() { console.log($scope.firstName);}
        $scope.logLastName  = function() { console.log($scope.lastName);}
        $scope.logFullName  = function() { console.log($scope.fullName);}

//       $scope.upBinding= 0 ; 
//       $scope.upBinding2= 0 ; 
//       $scope.upBinding3= 0 ; 
//       $scope.showNumberOfWatchers = function()
//       {
//           console.log("Number of Watchers:" + $scope.$$watchersCount);
//       };

//       $scope.CountOnce = function()
//       {
//           $scope.onceBinding= 1 ; 
//       };

//       $scope.Binding = function()
//       {
//           $scope.upBinding++;         
//       };

//       $scope.$watch(function() {
//           console.log("diget loop fired");
//       });

    };     

})(); 
