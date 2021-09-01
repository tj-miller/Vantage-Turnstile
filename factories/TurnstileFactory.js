app.factory('TurnstileFactory', ['$http', '$q', 'UtilsService', function($http, $q, UtilsService) {
  return {
      listLanes: function() {
        var deferred = $q.defer();
        $http({
            url: `${UtilsService.getBaseURL()}/atlantis/listLanes.php`,
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
