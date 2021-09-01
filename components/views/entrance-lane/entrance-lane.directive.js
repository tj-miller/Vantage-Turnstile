'use strict';

angular.module('app')
  .directive('entranceLane', ['TurnstileService', 'UserService', function(TurnstileService, UserService) {
    var directive = {};

    directive.restrict = 'E';
    directive.scope = {
    };
    directive.templateUrl = "components/views/entrance-lane/entrance-lane.html";
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
