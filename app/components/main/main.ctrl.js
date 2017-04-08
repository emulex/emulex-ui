/**
 * Created by actfanter on 16/10/13.
 */

(function ($) {
    $('body').append('<div class="infoMsg" id="infoMsg"></div>');
    $('body').append('<div class="errorMsg" id="errorMsg"></div>');
    $.fn.Msg = function (argMsg) {
        if (!argMsg) {
            argMsg = '请求失败！';
        }
        var m = $('#infoMsg');
        m.html(argMsg);
        m.slideDown('slow');
        setTimeout(function () {
            m.slideUp('slow');
        }, 1800);
    };
    $.fn.ErrorMsg = function (argMsg) {
        if (!argMsg) {
            argMsg = '请求失败！';
        }
        console.log(argMsg);
        var m = $('#errorMsg');
        m.html(argMsg);
        m.slideDown('slow');
        setTimeout(function () {
            m.slideUp('slow');
        }, 3500);
    };
})($);

angular.module('emulexApp').controller('AppCtrl', ['$scope', 'apiConfig', '$state', function ($scope, apiConfig, $state) {
    $scope.d = {};
    $scope.fn = {};
    $scope.d.menu = [
        {name: "正在下载", state: "taskDownloading", icon: "glyphicon glyphicon-download-alt"},
        {name: "已完成", state: "taskDone", icon: "glyphicon glyphicon-ok"},
        {name: "搜索资源", state: "search", icon: "glyphicon glyphicon-search"}
    ];

    $scope.fn.connect = function () {
        $scope.ws = new WebSocket(apiConfig.ws);
        $scope.ws.onopen = function (evt) {
            console.log("onopen", evt);
        };
        $scope.ws.onclose = function (evt) {
            console.log("onclose", evt);
            setTimeout(function () {
                $scope.fn.connect();
            }, 1500)
        };
        $scope.ws.onmessage = function (evt) {
            var res = eval('(' + evt.data + ')');
            console.log("onmessage", evt, res);
            $scope.$broadcast(res.type, res)
        };
        $scope.ws.onerror = function (evt) {
            console.log("onerr", evt);
            setTimeout(function () {
                $scope.fn.connect();
            }, 1500)
        };
    };

    $scope.fn.connect();

}]);


