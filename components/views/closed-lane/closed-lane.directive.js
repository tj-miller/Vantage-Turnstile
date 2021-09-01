'use strict';

angular.module('app')
  .directive('closedLane', ['TurnstileService', 'UserService', function(TurnstileService, UserService) {
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

     init();
    }

    directive.compile = function(element) {
      element.html(directive.template);
    }

    return directive;
  }]);
