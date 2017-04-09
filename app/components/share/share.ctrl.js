'use strict';

angular.module('share')
    .component('share', {
        templateUrl: "components/share/share.view.html",
        controller: [
            '$scope', 'shareSrv', 'utilSrv', function ($scope, shareSrv, utilSrv) {
                $scope.d = {};
                $scope.fn = {};
                $scope.d.shareList = [];

                $scope.fn.listShare = function () {
                    var params = {};
                    shareSrv.listShare(params).then(
                        function (resp) {
                            if (resp.code !== 0) {
                                $().ErrorMsg(resp.msg || '出错了~(≧ ﹏ ≦)');
                                return;
                            }
                            $scope.d.shareList = resp.shareList;
                        },
                        function (error) {
                            console.log(error);
                            $().ErrorMsg('系统崩了!? (≧ ﹏ ≦)');
                        }
                    );
                };

                $scope.fn.addShare = function () {
                    utilSrv.selectFile({}, function (location) {
                        var params = {
                            file: location[0]
                        };
                        shareSrv.addShare(params).then(
                            function (resp) {
                                if (resp.code !== 0) {
                                    $().ErrorMsg(resp.msg || '出错了~(≧ ﹏ ≦)');
                                    return;
                                }
                                $scope.fn.listShare();
                            },
                            function (error) {
                                console.log(error);
                                $().ErrorMsg('系统崩了!? (≧ ﹏ ≦)');
                            }
                        );
                    });
                };

                $scope.fn.delShare = function () {
                    shareSrv.delShare(params).then(
                        function (resp) {
                            if (resp.code !== 0) {
                                $().ErrorMsg(resp.msg || '出错了~(≧ ﹏ ≦)');
                                return;
                            }
                            $scope.fn.listShare();
                        },
                        function (error) {
                            console.log(error);
                            $().ErrorMsg('系统崩了!? (≧ ﹏ ≦)');
                        }
                    );
                };

                $scope.fn.listShare();
            }
        ]
    });

