'use strict';

angular.module('app')
  .factory('UserService', ['UserFactory', 'UtilsService',
    function(UserFactory, UtilsService) {

      var user = {};

      var logout = function() {
           UserFactory.logout(user.username).then(function() {
              backToLogin();
           });
      }

      var checkLogin = function() {
          UserFactory.checkLogin().then(function(usr) {
            if (usr && usr.username) {
              user = usr;
            } else {
              backToLogin();
            }
          });
      }

      var backToLogin = function() {
          window.location.href = UtilsService.getLoginAppURL();
      }

      var getUser = function() {
          return user;
      }

      var hasLogin = function() {
          // go back to login app if no user data
          if(angular.equals({}, user)) {
            backToLogin();
          }
      }

      return {
        logout: logout,
        getUser: getUser,
        checkLogin: checkLogin,
        hasLogin: hasLogin
      }
    }
  ]);
