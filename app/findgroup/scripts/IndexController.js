angular
  .module('findgroup')
  .controller("IndexController", function ($scope, Findgroup, supersonic) {
    $scope.findgroups = null;
    $scope.showSpinner = true;

    Findgroup.all().whenChanged( function (findgroups) {
        $scope.$apply( function () {
          $scope.findgroups = findgroups;
          $scope.showSpinner = false;
        });
    });
  });