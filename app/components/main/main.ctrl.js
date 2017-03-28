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
        console.log(argMsg);
        var m = $('#infoMsg');
        m.html(argMsg);
        m.slideDown('slow');
        setTimeout(function () {
            m.slideUp('slow');
        }, 1700);
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

angular.module('emulexApp').controller('AppCtrl', ['$scope',  function ($scope) {
    $scope.d = {};
    $scope.fn = {};
}]);


