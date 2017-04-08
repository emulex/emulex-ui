'use strict';

angular
    .module('request')
    .factory('requestSrv', ['$http', '$q', 'apiConfig', function ($http, $q, apiConfig) {
        return function (option) {
            option.url = apiConfig.address + option.url;

            return $http(option).then(function (response) {
                var defer = $q.defer();
                if (angular.isUndefined(response.data.code)) {
                    defer.reject({
                        type: -1,
                        data: response
                    });
                } else {
                    defer.resolve(response.data);
                }
                return defer.promise;
            }, function (err) {
                throw {
                    type: -1,
                    data: err
                };
            });
        };
    }]);