// lecture 19 
// Part 4


(function()
{
    'use strict';
    angular.module('ShoppingListApp',[])
    .controller( 'ShoppingListController1', ShoppingListController1 )
    .controller( 'ShoppingListController2', ShoppingListController2  )
    .factory('ShoppingListFactory', ShoppingListFactory);

    //  
    //  Defend again minification errors...
    ShoppingListController1.$inject = ['ShoppingListFactory' ];

    function ShoppingListController1(ShoppingListFactory) 
    {
        var list = this; 

        var shoppingList = ShoppingListFactory();

        list.itemName      = "";
        list.itemQuantity  = 0;

        list.getItems = function()
        {
            var lst = shoppingList.getItems();
            return    lst;
        }

        list.addItem = function()
        {
            shoppingList.addItem(list.itemName, list.itemQuantity);            
        }                               

        list.removeItem = function(index)
        {
            shoppingList.removeItem(index);
        }                           
    }
                                
    ShoppingListController2.$inject = ['ShoppingListFactory'];
    function ShoppingListController2 (ShoppingListFactory) 
    {
        var list2 = this;
        var shoppingList = ShoppingListFactory(3);   

        list2.itemName = "";
        list2.itemQuantity = 0;

        list2.addItem = function()
        {
            try
            {
                shoppingList.addItem( list2.itemName, list2.itemQuantity);
            }
            catch( error ) 
            {
                list2.errorMessage = error.message;
            }
        }

        list2.getItems = function()
        {
            var lst = shoppingList.getItems();
            return    lst;
        }

        list2.removeItem = function(itemIndex)
        {
            shoppingList.removeItem(itemIndex);             
        }
    };
         

                                
    function ShoppingListFactory() 
    { 
        var factory = function(maxItems)
        {
            return new ShoppingListService(maxItems);
        }

        return factory;
    }


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

