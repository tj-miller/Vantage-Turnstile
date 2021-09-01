'use strict';

angular.module('app')
  .directive('entranceLane', ['TurnstileService', function(TurnstileService) {
    var directive = {};

    directive.restrict = 'E';
    directive.scope = {
    };
    directive.templateUrl = "components/views/entrance-lane/entrance-lane.html";
    directive.transclude = true;

    directive.controller = function($scope) {

     
    }

    directive.compile = function(element) {
      element.html(directive.template);
    }

    return directive;
  }]);
