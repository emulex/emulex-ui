'use strict';

angular.module('share')
    .factory('shareSrv', ['requestSrv', function(requestSrv) {
        return {
            listShare: function (params) {
                var option = {
                    method: 'GET',
                    url: '/exec/search_file',
                    params: params
                };
                return requestSrv(option);
            },
            addShare: function (params) {
                var option = {
                    method: 'GET',
                    url: '/exec/search_file',
                    params: params
                };
                return requestSrv(option);
            },
            delShare: function (params) {
                var option = {
                    method: 'GET',
                    url: '/exec/search_file',
                    params: params
                };
                return requestSrv(option);
            }
        };
    }]);
