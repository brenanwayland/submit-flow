'use strict';

angular.module('submitFlowApp.login', ['ngMaterial','ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', [function($scope) {
    $scope.pubName = "The Muse";
    $scope.username;
    $scope.password;
    $scope.rememberInfo = false;

}]);
