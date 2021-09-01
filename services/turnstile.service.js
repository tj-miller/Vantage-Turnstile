'use strict';

angular.module('app')
  .factory('TurnstileService', ['TurnstileFactory',
    function(TurnstileFactory) {

      var testFn = function() {
          return TurnstileFactory.testFn();
      }

      return {
        testFn: testFn
      }
    }
  ]);
