
var directoryapp = angular.module("directoryapp", []);
directoryapp.controller("directorycontroller", function($scope, $http) {

  $scope.orderDirection = false;
  $scope.order = "Desc";

  $scope.searchUsers = function () {
    $http({
          url: 'https://api.github.com/search/users?q=' + $scope.searchtext + '&sort=repositories&order=desc', 
          method: "GET",
          params: {client_id:'0e09f95c78c31238b69e',
          client_secret:'d40edc14ee0ad42370904217ecd247a0300390dc'}
    }).then(function(result) {
      $scope.Details = result.data.items;    
    });
  }


  $scope.orderChange = function () {
    $scope.orderDirection = !$scope.orderDirection;
    if ($scope.order == "Asc")
        $scope.order = "Desc";
    else
        $scope.order = "Asc";
  }


});
