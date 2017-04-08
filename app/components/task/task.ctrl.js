'use strict';

angular.module('task')
    .component('task', {
        templateUrl: "components/task/task.view.html",
        controller: [
            '$scope', 'taskSrv', 'utilSrv', '$state', function ($scope, taskSrv, utilSrv, $state) {

                $scope.d = {};
                $scope.fn = {};
                $scope.d.tasks = [];
                $scope.d.state = $state.current.name;
                $scope.d.fileState = {
                    300: "未下载",
                    200: "已下载",
                    100: "下载中",
                };

                $scope.$on("finished_transfer", function (event, data) {
                    $scope.fn.listTask();
                });

                $scope.fn.formatFileSize = function (bytes) {
                    return utilSrv.formatFileSize(bytes);
                };

                $scope.fn.isDownloadingState = function () {
                    return $scope.d.state === "taskDownloading"
                };

                $scope.fn.listTask = function () {
                    var params = {};
                    taskSrv.listTask(params).then(
                        function (resp) {
                            if (resp.code !== 0) {
                                $().ErrorMsg(resp.msg || '出错了~(≧ ﹏ ≦)');
                                return;
                            }
                            $scope.d.tasks = resp.tasks;
                            $scope.d.downloadingCount = 0;
                            $scope.d.doneCount = 0;
                            angular.forEach($scope.d.tasks, function (data) {
                                if (data.status == 100) {
                                    $scope.d.downloadingCount++;
                                } else if (data.status == 200) {
                                    $scope.d.doneCount++;
                                }
                            })
                        },
                        function (error) {
                            console.log(error);
                            $().ErrorMsg('好像崩了!? (≧ ﹏ ≦)');
                        }
                    );
                };

                $scope.fn.listTask();
            }
        ]
    });

