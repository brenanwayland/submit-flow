'use strict';

// Declare app level module which depends on views, and components
var submitFlowApp = angular.module('submitFlowApp', [
  'ngRoute',
  'ngMaterial',
  'submitFlowApp.login',
  'submitFlowApp.dashboard',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/login'});
}]);

submitFlowApp.controller("CommonCtrl", [function($scope) {
    $scope.name = "The Muse",
    $scope.navBarTabs = [
        "Home",
        "To Review",
        "Search",
        "Browse"
    ]
}]);
