(function()
{
    'use strict';
    angular.module('MsgApp',[])
    .controller( 'MsgController', MsgController)
    .filter('loves',LovesFilter)
    .filter('truth',TruthFilter);

    //  
    //  Defend again minification errors...
    MsgController.$inject =  ['$scope', 'lovesFilter' ];
        
    function MsgController($scope,LovesFilter) 
    {
        $scope.name ='Dano';
        $scope.stateOfBeing = "hungry";
        $scope.cookieCost =3.33;
        
        $scope.sayMessage = function() 
        {            
            var msg =  "Likes to eat healthy snacks at night!";
            return msg;
        };

        $scope.sayLovesMessage = function() 
        {            
            var msg =  "Likes to eat healthy snacks at night!";
            msg  = LovesFilter(msg);
            return msg;
        };

        $scope.feedDano = function()
        {
            $scope.stateOfBeing = "fed";
        };
    };

    function LovesFilter()
    {
        return function(input)
        {
            input = input || "";
            input = input.replace("Likes", "Loves");
            return input; 
        };
    }


    function TruthFilter()
    {
        return function(input,target,replace)
        {
            input = input || "";
            input = input.replace(target,replace);
            return input; 
        };
    }


})(); 
