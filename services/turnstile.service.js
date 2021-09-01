'use strict';

angular.module('app')
  .factory('TurnstileService', ['TurnstileFactory','$q',
    function(TurnstileFactory, $q) {

      var laneNumber = '';
      var listLanes = {};

      var selectLane = function(lnNum) {
          laneNumber = lnNum;
      }

      var fetchLanes = function() {
        var deferred = $q.defer();
        TurnstileFactory.listLanes().then(function(res) {
          listLanes = res;
          deferred.resolve(res);
        })
        .catch(function(e) {
          deferred.reject(e);
        });
        return deferred.promise;
      }

      var getLanesList = function() {
        return listLanes;
      }

      var setLanesList = function(lanes) {
        listLanes = lanes;
      }

      return {
        selectLane: selectLane,
        fetchLanes: fetchLanes,
        setLanesList: setLanesList,
        getLanesList: getLanesList,
      }
    }
  ]);
