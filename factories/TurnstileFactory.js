app.factory('TurnstileFactory', ['$http', '$q', 'UtilsService', function($http, $q, UtilsService) {
  return {
      testFn: function() {
        var deferred = $q.defer();
        $http({
            url: `${UtilsService.getBaseURL()}/v2t_products/listCategories.php`,
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
