'use strict';

angular.module('app')
  .directive('closedLane', ['TurnstileService', function(TurnstileService) {
    var directive = {};

    directive.restrict = 'E';
    directive.scope = {
    };
    directive.templateUrl = "components/views/closed-lane/closed-lane.html";
    directive.transclude = true;

    directive.controller = function($scope) {

     
    }

    directive.compile = function(element) {
      element.html(directive.template);
    }

    return directive;
  }]);
