//!function(){"use strict";function n(n,o,e){this.arguments;n.name="dAnO",n.upper=function(){var e=o("uppercase");n.name=e(n.name)}}function o(n,o,e){return"foo"}var e=angular.module("DIApp",[]);e.controller("DIController",n),n.$inject=["$scope","$filter"],console.log(o()),console.log(o)}();


(function()
{
    'use strict';
    var app = angular.module('DIApp',[]);
    app.controller( 'DIController',DIController);

    //  
    //  Defend again minification  errors...
    //
    DIController.$inject =  ['$scope','$filter'];
        
    function DIController($scope,$filter,$injector) 
    {
        var args = this.arguments;
        $scope.name ='dAnO';
        $scope.upper = function() {
            var upCase    = $filter('uppercase');
            $scope.name =upCase($scope.name);
        }
    }           

    function bla(name, job, blah ) 
    {
        return "foo";
    }

    console.log(bla());
    console.log(bla);

})(); 