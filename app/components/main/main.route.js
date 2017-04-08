'use strict';

angular.module('emulexApp')
    .config(["$locationProvider", "$stateProvider", "$urlRouterProvider", function ($locationProvider, $stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/downloading");

        $stateProvider
            .state("taskDownloading", {
                url: "/downloading",
                template: "<task></task>"
            })
            .state("taskDone", {
                url: "/done",
                template: "<task></task>"
            })
            .state("search", {
                url: "/search",
                template: "<search></search>"
            })

    }])
    // .run(function ($rootScope, $state, $stateParams) {
    //     $rootScope.$state = $state;
    //     $rootScope.currState = -1;
    //     $rootScope.$stateParams = $stateParams;
    //     $rootScope.stateHistory = [];
    //     $rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
    //         $rootScope.currState++;
    //         $rootScope.currState = $rootScope.currState % 10;
    //         $rootScope.stateHistory[$rootScope.currState] = {};
    //         $rootScope.stateHistory[$rootScope.currState].previousState_name = fromState.name;
    //         $rootScope.stateHistory[$rootScope.currState].previousState_params = fromParams;
    //     });
    //     //back button function called from back button's ng-click="back()"
    //     $rootScope.backState = function () {//实现返回的函数
    //         $state.go($rootScope.stateHistory[$rootScope.currState].previousState_name, $rootScope.stateHistory[$rootScope.currState].previousState_params);
    //     };
    //     $rootScope.preState = function () {//实现返回的函数
    //         $state.go($rootScope.stateHistory[$rootScope.currState].previousState_name, $rootScope.stateHistory[$rootScope.currState].previousState_params);
    //     };
    // });
;
