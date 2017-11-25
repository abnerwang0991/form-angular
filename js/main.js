angular.module('myApp', []).controller('userCtrl', function($scope) {
  $scope.fName = '';
  $scope.lName = '';
  $scope.passw1 = '';
  $scope.passw2 = '';
  $scope.users = [
	  {lName:'劉', fName:"備" },
	  {lName:'關',  fName:"羽" },
	  {lName:'張',  fName:"飛" },
	  {lName:'諸葛', fName:"亮" },
	  {lName:'趙', fName:"雲" },
	  {lName:'龐',fName:"統" }
  ];
  $scope.edit = true;
  $scope.error = false;
  $scope.incomplete = false; 
  $scope.hideform = true; 
  $scope.editUser = function(id,index) {
    $scope.hideform = false;
    if (id == 'new') {
      $scope.edit = true;
      $scope.incomplete = true;
      $scope.lName = '';
      $scope.fName = '';
    } else {
      $scope.edit = false;
      $scope.lName = $scope.users[index].lName;
      $scope.fName = $scope.users[index].fName; 
    }
  };

  $scope.add = function() {
   	  $scope.users.forEach(function(e, i) {
        if(e.lName == $scope.lName && e.fName == $scope.fName) {
          $scope.users.splice(i, 1);
        }
      });
   	  $scope.users.push({
      	lName: $scope.lName,
        fName: $scope.fName
      });
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