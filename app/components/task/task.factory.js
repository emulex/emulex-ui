'use strict';

angular.module('task')
    .factory('taskSrv', ['requestSrv', function(requestSrv) {
        return {
            listTask: function (params) {
                var option = {
                    method: 'GET',
                    url: '/exec/list_task',
                    params: params
                };
                return requestSrv(option);
            },
            addTask: function (params) {
                var option = {
                    method: 'GET',
                    url: '/exec/add_task',
                    params: params
                };
                return requestSrv(option);
            }
        };
    }]);
