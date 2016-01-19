angular
  .module('findgroup')
  .controller("NewController", function ($scope, Findgroup, supersonic) {
    $scope.findgroup = {};

    $scope.submitForm = function () {
      $scope.showSpinner = true;
      newfindgroup = new Findgroup($scope.findgroup);
      newfindgroup.save().then( function () {
        supersonic.ui.modal.hide();
      });
    };

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });