'use strict';

var crossTrackControllers = angular.module('crossTrackControllers', []);

/* Controllers */

crossTrackControllers.controller('AppController', function ($scope, $http) {

  $http({
    method: 'GET',
    url: '/api/name'
  }).
  success(function (data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function (data, status, headers, config) {
    $scope.name = 'Error!';
  });

});

crossTrackControllers.controller('MyCtrl1', function ($scope) {
  // write Ctrl here

});

crossTrackControllers.controller('MyCtrl2', function ($scope) {
  // write Ctrl here

});
