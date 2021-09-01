app.factory('UserFactory', ['$http', '$q', 'UtilsService', function($http, $q, UtilsService) {
  return {
      logout: function(username) {
        var deferred = $q.defer();
        $http({
            url: `${UtilsService.getBaseURL()}/atlantis/userLogout.php`,
            params: {
              username: username
            },
            method: "GET"
          }).then(function(response) {
            if (response && response.data) {
              deferred.resolve(response.data);
            }
          })
          .catch(function(e) {
            deferred.reject(e);
          });

        return deferred.promise;
      },
      checkLogin: function() {
        var deferred = $q.defer();
        $http({
            url: `${UtilsService.getBaseURL()}/atlantis/checkLogin.php`,
            method: "GET"
          }).then(function(response) {
            if (response && response.data) {
              deferred.resolve(response.data);
            }
          })
          .catch(function(e) {
            deferred.reject(e);
          });

        return deferred.promise;
      }
  }
}]);
