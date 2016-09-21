(function()
{
    'use strict';
    var shoppingList1 = [
        "Milk",
        "Donuts",
        "Cookies",
        "Chocolate",
        "Peanut Butter",
        "Pepto Bismol",
        "Pepto Bismol (Chocolate flavor)",
        "Pepto Bismol (Cookie flavor)"
    ];

     var shoppingList2 = [
        {
            name: "Milk",
            quantity: "3"
        },
        {
            name: "Donuts",
            quantity: "3"
        },
        {
            name: "Cookies",
            quantity: "3"
        },
        {
            name: "Chocolate",
            quantity: "3"
        },
        {
            name: "Peanut Butter",
            quantity: "3"
        },
        {
            name: "Pepto Bismol",
            quantity: "3"
        },
        {
            name: "Pepto Bismol (Chocolate flavor)",
            quantity: "3"
        },
        {
            name: "Pepto Bismol (Cookie flavor)" ,
            quantity: "3"
        }
    ];       

    angular.module('ShoppingListApp',[])
    .controller( 'ShoppingListAppController', ShoppingListAppController);

    //  
    //  Defend again minification errors...
    ShoppingListAppController.$inject =  ['$scope' ];
        
    function ShoppingListAppController($scope) 
    {
        $scope.shoppingList1= shoppingList1;
        $scope.shoppingList2= shoppingList2;
        $scope.newItemName="";
        $scope.newItemQuantity=""; 

        $scope.addNewItem = function()
        {               
            var newItemx =
            {
                name:     $scope.newItemName,
                quantity: $scope.newItemQuantity
            };
            $scope.shoppingList2.push(newItemx);            
            $scope.newItemName="";
            $scope.newItemQuantity=""; 
        }

    };     


})(); 

