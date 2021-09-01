'use strict';

angular.module('app')
  .directive('laneSelect', ['UserService', function(UserService) {
    var directive = {};

    directive.restrict = 'E';
    directive.scope = {
    };
    directive.templateUrl = "components/views/lane-select/lane-select.html";
    directive.transclude = true;

    directive.controller = function($scope) {

      var init = function() {
        UserService.checkLogin();
      }

      init();
    }

    directive.compile = function(element) {
      element.html(directive.template);
    }

    return directive;
  }]);
