angular
  .module('findgroup')
  .controller("EditController", function ($scope, Findgroup, supersonic) {
    $scope.findgroup = null;
    $scope.showSpinner = true;

    // Fetch an object based on id from the database
    Findgroup.find(steroids.view.params.id).then( function (findgroup) {
      $scope.$apply(function() {
        $scope.findgroup = findgroup;
        $scope.showSpinner = false;
      });
    });

    $scope.submitForm = function() {
      $scope.showSpinner = true;
      $scope.findgroup.save().then( function () {
        supersonic.ui.modal.hide();
      });
    }

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });
