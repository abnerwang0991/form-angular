angular.module('myApp', []).controller('userCtrl', function($scope) {
  $scope.fName = '';
  $scope.lName = '';
  $scope.passw1 = '';
  $scope.passw2 = '';
  $scope.users = [
  {id:0, lName:'劉', fName:"備" },
  {id:1, lName:'關',  fName:"羽" },
  {id:2, lName:'張',  fName:"飛" },
  {id:3, lName:'諸葛', fName:"亮" },
  {id:4, lName:'趙', fName:"雲" },
  {id:5, lName:'龐',fName:"統" }
  ];
  $scope.edit = true;
  $scope.error = false;
  $scope.incomplete = false; 
  $scope.hideform = true; 
  $scope.editUser = function(id) {
    $scope.hideform = false;
    if (id == 'new') {
      $scope.edit = true;
      $scope.incomplete = true;
      $scope.lName = '';
      $scope.fName = '';
      } else {
      $scope.edit = false;
      $scope.lName = $scope.users[id].lName;
      $scope.fName = $scope.users[id].fName; 
    }
  };

  $scope.$watch('passw1',function() {$scope.test();});
  $scope.$watch('passw2',function() {$scope.test();});
  $scope.$watch('fName', function() {$scope.test();});
  $scope.$watch('lName', function() {$scope.test();});

  $scope.test = function() {
    if ($scope.passw1 !== $scope.passw2) {
      $scope.error = true;
      } else {
      $scope.error = false;
    }
    $scope.incomplete = false;
    if ($scope.edit && (!$scope.fName.length ||
    !$scope.lName.length ||
    !$scope.passw1.length || !$scope.passw2.length)) {
       $scope.incomplete = true;
    }
  };
});