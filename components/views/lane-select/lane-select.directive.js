'use strict';

angular.module('app')
  .directive('laneSelect', ['TurnstileService', function(TurnstileService) {
    var directive = {};

    directive.restrict = 'E';
    directive.scope = {
    };
    directive.templateUrl = "components/views/lane-select/lane-select.html";
    directive.transclude = true;

    directive.controller = function($scope) {

     
    }

    directive.compile = function(element) {
      element.html(directive.template);
    }

    return directive;
  }]);
