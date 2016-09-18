(function()
{
    'use strict';
    var app = angular.module('MsgApp',[]);
    app.controller( 'MsgController',MsgController);

    //  
    //  Defend again minification  errors...
    //
    MsgController.$inject =  ['$scope','$filter'];
        
    function MsgController($scope) 
    {
        $scope.name ='Dano';
        $scope.sayMessage  = function()  
        {
            return "Dano was here again...";
        }

    }           

    function bla(name, job, blah ) 
    {
        return "foo";
    }

    console.log(bla());
    console.log(bla);

})(); 