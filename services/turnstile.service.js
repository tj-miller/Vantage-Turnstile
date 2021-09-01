'use strict';

angular.module('app')
  .factory('TurnstileService', ['TurnstileFactory',
    function(TurnstileFactory) {

      var laneNumber = '';

      var selectLane = function(lnNum) {
          laneNumber = lnNum;
      }

      return {
        selectLane: selectLane
      }
    }
  ]);
