angular.module('eventool.controllers')

.controller('ClientsCtrl', function($scope, Client) {
  // Search
  Client.search({search_param: "May"}).then(function(responseData) {
    $scope.customers = responseData;
  }, function() {
    console.log("There was an error");
  });
})