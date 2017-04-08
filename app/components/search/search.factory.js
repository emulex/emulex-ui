'use strict';

angular.module('search')
    .factory('searchSrv', ['requestSrv', function(requestSrv) {
        return {
            searchFile: function (params) {
                var option = {
                    method: 'GET',
                    url: '/exec/search_file',
                    params: params
                };
                return requestSrv(option);
            }
        };
    }]);
