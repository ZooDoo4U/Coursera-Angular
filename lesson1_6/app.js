//  var upperCase = function (strValue) 
//  {
//     'use strict';
//      return strValue.toUpperCase();
//  //   var retStr = "";
//  //   for( var i = 0 ; i < strValue.length; ++i)
//  //   {
//  //       retStr += strValue[i];
//  //       
//  //   }   

//  }


(function()
{
    'use strict';
    var app = angular.module('DIApp',[]);
    app.controller( 'DIController',DIController);
        
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


