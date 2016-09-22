(function()
{
//   'use strict';
    var shoppingList = [
        "Milk",
        "Donuts",
        "Cookies",
        "Chocolate",
        "Peanut Butter",
        "Pepto Bismol",
        "Pepto Bismol (Chocolate flavor)",
        "Pepto Bismol (Cookie flavor)"
    ];

    angular.module('ProtoTypeApp',[])
    .controller( 'ProtoTypeController', ProtoTypeController);

    //  
    //  Defend again minification errors...
    ProtoTypeController.$inject =  ['$scope' ];
    
    var parent = {
        value: 'ParentValue',
        obj: { objValue: 'ObjectValue'},
        walk:   function()   
                {
                    console.log("walking");
                }
    };

//    var child = Object.create(parent);
//    console.log("Child  - Child.Value",          child.value);
//    console.log("Child  - Child.obj.objValue",   child.obj.objValue  );
//    console.log("PARENT - Child.Value",          child.value         );
//    console.log("PARENT - parent.value",         parent.value        );
//    console.log("child: ",child );
//    console.log("parent:",parent);
//
//    console.log("update child values...");
//    child.value = "childValue";
//    child.obj.objValue = "childObjValue";
//
//    console.log(" CHILD - Child.Value",          child.value);
//    console.log(" CHILD - Child.obj.objValue",   child.obj.objValue  );
//
//    console.log(" Parent - Child.Value",           parent.value);
//    console.log(" Parent  - Child.obj.objValue",   parent.obj.objValue  );
//
//    console.log("child: ",child );
//    console.log("parent:",parent);
//
//    console.log("child.obj === parent.obj?",  child.obj === parent.obj);
//
//    var grandChild = Object.create(child);
//    console.log("grandChild", grandChild);
//    grandChild.walk();
//

    function Dog(naem) 
    {
        var this.name="name";
        console.log("'this' is:", this);
    }

    var myDog = new Dog("Max");
    console.log("myDog: ",myDog);

    Dog("Tejal");



    function ProtoTypeController($scope) 
    {
        $scope.shoppingList  = shoppingList ; 
//        console.log(  $scope.shoppingList  );
        $scope.OddLengthWords = function(value) { return value.length  & 1;};
        $scope.Contacts =  
        [              
            { firstName: 'a', lastName: 'b', id: 'abc' },
            { firstName: 'a', lastName: 'b', id: 'def' },
            { firstName: 'a', lastName: 'b', id: 'ghi' },
            { firstName: 'a', lastName: 'b', id: 'jkl' }
        ];  
    };
})(); 

