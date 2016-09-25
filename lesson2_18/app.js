
(function()
{
    'use strict';
    angular.module('ShoppingListApp',[])
    .controller( 'ShoppingListController', ShoppingListController )
    .provider('ShoppingListService', ShoppingListServiceProvider);

    //  
    //  Defend again minification errors...
    ShoppingListController.$inject = ['ShoppingListService' ];

    function ShoppingListController(ShoppingListService) 
    {
        var list = this; 

        list.items = ShoppingListService.getItems();
        list.itemName      = "";
        list.itemQuantity  = 0;
        list.errorMessage = "";

        list.addItem = function()
        {
            try
            {
                list.errorMessage = "";
                ShoppingListService.addItem(list.itemName, list.itemQuantity);            
            }
            catch (error)
            {
                list.errorMessage = error.message;
            }
        }                               
        
        list.removeItem = function(index)
        {
            list.errorMessage = "";
            ShoppingListService.removeItem(index);

        }  

        list.getItems = function()
        {
            return  items;
        }
    };

    function ShoppingListService(maxItems) 
    {
        var service=this;
        var items =[];

        service.addItem = function(itemName, itemQuantity) 
        {
            if( (maxItems === undefined) ||
                (maxItems !== undefined && items.length < maxItems) )
            {
                var newItem = { itemName : itemName, itemQuantity : itemQuantity };
                items.push(newItem);
            }
            else
            {
                throw new Error("Max items (" + maxItems + ") already reached...");
            }
        };

             
        service.removeItem = function(index) 
        {                               
            items.splice(index,1);
        
        };
        
        service.getItems = function()
        {
            return items;
        };                              
    };
                                
    function ShoppingListServiceProvider() 
    { 
        var provider = this;
        
        provider.defaults = { maxItems: 10 }; 

        provider.$get = function ()
        {
            var shoppinList = new ShoppingListService( provider.defaults.maxItems);
            return shoppinList; 
        }
    }


})(); 

