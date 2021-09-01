var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      template: '<lane-select></lane-select>'
    })
    .when('/closed', {
      template: '<closed-lane></closed-lane>'
    })
    .when('/exit', {
      template: '<exit-lane></exit-lane>'
    })
    .when('/entrance', {
      template: '<entrance-lane></entrance-lane>'
    })
    .otherwise({
      redirectTo: '/'
    });
});
