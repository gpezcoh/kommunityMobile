angular
  .module('findgroup')
  .controller("ShowController", function ($scope, Findgroup, supersonic) {
    $scope.findgroup = null;
    $scope.showSpinner = true;
    $scope.dataId = undefined;

    var _refreshViewData = function () {
      Findgroup.find($scope.dataId).then( function (findgroup) {
        $scope.$apply( function () {
          $scope.findgroup = findgroup;
          $scope.showSpinner = false;
        });
      });
    }

    supersonic.ui.views.current.whenVisible( function () {
      if ( $scope.dataId ) {
        _refreshViewData();
      }
    });

    supersonic.ui.views.current.params.onValue( function (values) {
      $scope.dataId = values.id;
      _refreshViewData();
    });

    $scope.remove = function (id) {
      $scope.showSpinner = true;
      $scope.findgroup.delete().then( function () {
        supersonic.ui.layers.pop();
      });
    }
  });