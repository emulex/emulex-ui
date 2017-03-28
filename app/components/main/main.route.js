'use strict';

angular.module('emulexApp')
    .config(["$locationProvider", "$stateProvider", "$urlRouterProvider", function ($locationProvider, $stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("download", {
                url: "/download",
                template: "<download></download>"
            })
            .state("index", {
                url: "/",
                template: "<div style='text-align: center'><h3>hey</h3></div>"
            })

    }]);
