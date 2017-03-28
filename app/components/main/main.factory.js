'use strict';
angular
    .module('emulexApp')
    .factory('emulexSrv', ['requestSrv', function (requestSrv) {
        return {
            g: function () {
                var option = {
                    method: 'GET',
                    url: '/g'
                };
                return requestSrv(option);
            }
        };
    }]);
