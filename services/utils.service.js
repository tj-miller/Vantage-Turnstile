'use strict';

angular.module('app')
  .factory('UtilsService', function() {

    var assetURL = 'https://horizon.vantagelabs.co/assets';
    // var baseURL = 'https://horizon.vantagelabs.co/v2_api';
    var baseURL = 'https://dev1.vantagelabs.co/v2_api';
    var version = 'v1.0.0';

    var getAssetURL = function() {
      return assetURL;
    }

    var getBaseURL = function() {
      return baseURL;
    }

    var v = function() {
      return version;
    }

    return {
      getAssetURL: getAssetURL,
      getBaseURL: getBaseURL,
      v: v
    }
  });
