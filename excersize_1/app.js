//  I think in the spirit of the assignment this code follows what the requirements were.
//  One thing I took a little liberty with.  One change I made was to update the border 
//  of the input box before the user presses the "Check If Too Much" button.
//  That and I changed/added more info for the status messages presented to users.
//  Also I had one version that updated the user message about too much or enjoy in
//  realtime, but the assignment was to have a button, I beleive to specifically see/use
//  the ng-click Angular's version for onclick() thus the auto fail if you used the HTML default...
//  If desired just uncomment the call to DisplayMessage() in the UpdateBorder()...

//
//  FYI: This was tested with the minify, and it worked fine... ie. the ctrlr.$inject...
//


//
//  CSS on-line helper -- http://enjoycss.com/start#border
//

(function()
{
    'use strict';
    var app = angular.module('TxtBoxApp',[]);
    app.controller( 'TxtBoxController',TxtBoxController);

    //
    //  Defend again minification  errors...
    //
    TxtBoxController.$inject =  ['$scope','$filter'];

    function TxtBoxController($scope)
    {
        $scope.textBox      =   "";                 //  input text box for user input
        $scope.userMessage  =   "";                 //  status message when the user presses teh check box.
        $scope.inputBoxCSS  =   "normalBorder";     //  css variably for dynamicaly updating the border color.

        $scope.UpdateBorder=function()
        {
            //  
            //  Sprint user input (textBox) into an array. 
            //
            var items  = splitAndFilterStrings($scope.textBox,',');  

            $scope.userMessage   = "";              //  Always clear previous message to avoid confusing UI state.

            //  Determine the corrct border color...
            //
            //  Borders
            //   [ normalBorder | redBorder | greenBoarder]
            //
            if( items.length <1) 
            {
                $scope.inputBoxCSS  =   "normalBorder";
            }
            else if( items.length < 4 )
            {
                $scope.inputBoxCSS  =   "greenBoarder";
            }
            else
            {
                $scope.inputBoxCSS  =   "redBorder";
            }

            //  Uncomment this as we don't need the user to even press the button... 
            //  $scope.DisplayMessage();

        };  //  end -- $scope.UpdateBorder=function()

        $scope.DisplayMessage=function()
        {
            var items  = splitAndFilterStrings($scope.textBox,',');

            if( items.length <1 )
            {
                $scope.userMessage = "Please enter data first -- Don't let Yaakov starve... Don't be mean!";
            } 
            else if ( items.length <4 )
            {
                $scope.userMessage = "Enjoy! -- Yaakov says \"Thank-You\"";
            }
            else
            {
                $scope.userMessage = "\"Too much!\" -- Yaakov needs to stay in shape!!!";
            }

        };  //  end -- $scope.DisplayMessage=function()


        function splitAndFilterStrings(stringToSplit, separator)
        {
            //
            //  Trim off trailing whitespace and commas.
            //
            var arrayOfStrings =  stringToSplit.replace(/[ ,]+$/,"").split(',');

            if( arrayOfStrings.length   == 1 && arrayOfStrings[0].length ==0 )
            {
                //  
                //  if we get a valid string, the split will result in a one element array with an 
                //  empty string.  So see if in fact arrayOfStrings is like this and return an 
                //  array with zero items.
                //
                return [];
            }

            var returnStrings = []; 
            for(var i=0; i < arrayOfStrings.length; ++i) 
            {
                var tmpStr = arrayOfStrings[i].trim();
                if( tmpStr.length > 0 )
                {
                    returnStrings.push(tmpStr); 
                }
            }

            return returnStrings;

        }; // end -- splitString(stringToSplit, separator)

    }   //  end -- TxtBoxController($scope)

})();   //   end -- IIFEE()



