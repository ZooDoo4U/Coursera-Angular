// lecture 19 
// Part 4


(function()
{
    'use strict';
    angular.module('ShoppingListApp',[])
    .controller( 'ShoppingListAddController', ShoppingListAddController )
    .controller( 'ShoppingListShowController', ShoppingListShowController  )
    .service('ShoppingListService',ShoppingListService);

    //  
    //  Defend again minification errors...
    ShoppingListAddController.$inject = ['ShoppingListService' ];

    function ShoppingListAddController (ShoppingListService) 
    {
        var itemAdder = this; 

        itemAdder.itemName      = "";
        itemAdder.itemQuantity  = 0;
        itemAdder.AddItem = function()
        {
            ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);            
        }                               
    }
                                
    ShoppingListShowController.$inject = ['ShoppingListService'];
    function ShoppingListShowController (ShoppingListService) 
    {
        var showList = this;
        showList.items   = ShoppingListService.getItems();   

        showList.removeItem = function(itemIndex)
        {
            ShoppingListService.removeItem(itemIndex);             
        }
    };
         

                                
    function ShoppingListService() 
    {
        var service=this;
        var items =[];
        service.addItem = function(itemName, itemQuantity) 
        {
            var newItem = { itemName : itemName, itemQuantity : itemQuantity };
            items.push(newItem);
        };

        service.getItems = function()
        {
            return items;
        };                      

        service.removeItem = function(index) 
        {                               
            items.splice(index,1);
        
        };

    };

})(); 
