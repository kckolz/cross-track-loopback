'use strict';

// Declare app level module which depends on filters, and services

var crossTrackApp = angular.module('crossTrackApp', [
  'crossTrackControllers',
  'crossTrackFilters',
  'crossTrackServices',
  'crossTrackDirectives'
]);

crossTrackApp.config(['$routeProvider', '$locationProvider', 
  function ($routeProvider, $locationProvider) {
    $routeProvider.
      when('/view1', {
        templateUrl: 'partials/partial1',
        controller: 'MyCtrl1'
      }).
      when('/view2', {
        templateUrl: 'partials/partial2',
        controller: 'MyCtrl2'
      }).
      otherwise({
        redirectTo: '/view1'
      });

    $locationProvider.html5Mode(true);
});
