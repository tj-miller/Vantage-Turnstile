'use strict';

angular.module('app')
  .directive('successView', ['TurnstileService', function(TurnstileService) {
    var directive = {};

    directive.restrict = 'E';
    directive.scope = {
    };
    directive.templateUrl = "components/common/success-view/success-view.html";
    directive.transclude = true;

    directive.controller = function($scope) {

     
    }

    directive.compile = function(element) {
      element.html(directive.template);
    }

    return directive;
  }]);
