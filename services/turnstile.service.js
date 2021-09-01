'use strict';

angular.module('app')
  .factory('TurnstileService', ['TurnstileFactory',
    function(TurnstileFactory) {

      var someFunction = function() {
          return TurnstileFactory.anotherFunction();
      }

      return {
        someFunction: someFunction
      }
    }
  ]);
