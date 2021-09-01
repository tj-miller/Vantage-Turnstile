'use strict';

angular.module('app')
  .directive('exitLane', ['TurnstileService', 'UserService', '$location', function(TurnstileService, UserService, $location) {
    var directive = {};

    directive.restrict = 'E';
    directive.scope = {
    };
    directive.templateUrl = "components/views/exit-lane/exit-lane.html";
    directive.transclude = true;

    directive.controller = function($scope) {

      var init = function() {
        UserService.hasLogin();
     }

     $scope.closeLane = function() {
      $location.path('/closed');
    }

     init();
    }

    directive.compile = function(element) {
      element.html(directive.template);
    }

    return directive;
  }]);
