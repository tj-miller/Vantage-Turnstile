'use strict';

angular.module('app')
  .directive('logout', ['UserService', function(UserService) {
    var directive = {};

    directive.restrict = 'E';
    directive.scope = {
    };
    directive.templateUrl = "components/common/logout/logout.html";
    directive.transclude = true;

    directive.controller = function($scope) {
     
      $scope.logout = function() {
        UserService.logout();
      }

    }

    directive.compile = function(element) {
      element.html(directive.template);
    }

    return directive;
  }]);
