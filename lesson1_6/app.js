(function()
{
    'use strict';
//    alert("hello");
      
    var app = angular.module("nameCalculator",[]);
    app.controller( "nameCalculatorController", function($scope) 
    {
        $scope.name="";
        $scope.nameTotalValue=0;
        $scope.displayNameValue   = function()
        {
            var tmpVal  = calculateNameValue($scope.name); 
            $scope.nameTotalValue = tmpVal;
        }     
    });
    
})(); 


function calculateNameValue(theString) 
{
    var tmpVal =0  ; 
    for( var i=0; i < theString.length;++i)
    {
        tmpVal  += (theString.charCodeAt(i));
    }
    return tmpVal; 


}