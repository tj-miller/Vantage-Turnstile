'use strict';

angular.module('app')
  .directive('laneSelect', ['UserService', '$location', 'TurnstileService', function(UserService, $location, TurnstileService) {
    var directive = {};

    directive.restrict = 'E';
    directive.scope = {
    };
    directive.templateUrl = "components/views/lane-select/lane-select.html";
    directive.transclude = true;

    directive.controller = function($scope) {

      var init = function() {
        UserService.checkLogin();
        TurnstileService.fetchLanes().then(function(res){
          TurnstileService.setLanesList(res);
          console.log(TurnstileService.getLanesList());
        });
      }

      init();

      $scope.selectLane = function(laneNumber) {
        TurnstileService.selectLane(laneNumber);
        $location.path('/closed');
      }
    }

    directive.compile = function(element) {
      element.html(directive.template);
    }

    return directive;
  }]);
