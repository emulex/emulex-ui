'use strict';

angular.module('search')
    .component('search', {
        templateUrl: "components/search/search.view.html",
        controller: [
            '$scope', 'searchSrv', 'taskSrv', 'utilSrv', 'apiConfig', function ($scope, searchSrv, taskSrv, utilSrv, apiConfig) {
                $scope.d = {};
                $scope.fn = {};
                $scope.d.tasks = [];
                $scope.d.search = {key: ""};
                $scope.d.state = "wait";
                $scope.d.fileState = {
                    300: "未下载",
                    200: "已下载",
                    100: "下载中",
                };
                $scope.d.opState = {
                    wait: "搜索",
                    searching: "停止"
                };

                $scope.fn.setWait = function () {
                    $scope.d.state = "wait";
                };
                $scope.fn.setSearch = function () {
                    $scope.d.state = "searching";
                };
                $scope.fn.isWait = function () {
                    return $scope.d.state === "wait";
                };
                $scope.fn.formatFileSize = function (bytes) {
                    return utilSrv.formatFileSize(bytes);
                };

                $scope.fn.searchFile = function (isRemote) {
                    if ($scope.d.search.key == "") {
                        $().ErrorMsg('请输入关键词!');
                        return;
                    }
                    var params = {
                        query: $scope.d.search.key
                    };
                    if (isRemote === true) {
                        if (!$scope.fn.isWait()) {
                            $().ErrorMsg('还在搜索中，请完成后再试!');
                            return;
                        }
                        params.remote = 1;
                    } else {
                        params.remote = 0;
                    }

                    $scope.fn.setSearch();
                    searchSrv.searchFile(params).then(
                        function (resp) {
                            if (resp.code !== 0) {
                                $().ErrorMsg(resp.msg || '出错了~(≧ ﹏ ≦)');
                                return;
                            }
                            $scope.d.tasks = resp.fs;
                        },
                        function (error) {
                            console.log(error);
                            $().ErrorMsg('系统崩了!? (≧ ﹏ ≦)');
                        }
                    );
                };

                $scope.fn.addTask = function (file) {
                    utilSrv.selectDir({}, function (location) {
                        var params = {
                            hash: file.emd4,
                            filename: file.filename,
                            location: location[0],
                            size: file.size
                        };
                        taskSrv.addTask(params).then(
                            function (resp) {
                                if (resp.code !== 0) {
                                    $().ErrorMsg(resp.msg || '出错了~(≧ ﹏ ≦)');
                                    return;
                                }
                                $scope.fn.searchFile(false);
                            },
                            function (error) {
                                console.log(error);
                                $().ErrorMsg('系统崩了!? (≧ ﹏ ≦)');
                            }
                        );
                    });
                };

                $scope.$on("file_found", function (event, data) {
                    if ($scope.fn.isWait()) {
                        return
                    }
                    $scope.fn.searchFile(false);
                });
            }
        ]
    });

