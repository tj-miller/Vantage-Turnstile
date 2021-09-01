'use strict';

angular.module('app')
  .directive('closedLane', ['TurnstileService', 'UserService', '$location', function(TurnstileService, UserService, $location) {
    var directive = {};

    directive.restrict = 'E';
    directive.scope = {
    };
    directive.templateUrl = "components/views/closed-lane/closed-lane.html";
    directive.transclude = true;

    directive.controller = function($scope) {

     var init = function() {
        UserService.hasLogin();
     }

     $scope.openAsEntrance = function() {
        $location.path('/entrance');
     }

     $scope.openAsExit = function() {
        $location.path('/exit');
     }

     init();
    }

    directive.compile = function(element) {
      element.html(directive.template);
    }

    return directive;
  }]);
