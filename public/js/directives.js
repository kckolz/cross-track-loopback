'use strict';

var crossTrackDirectives = angular.module('crossTrackDirectives', []);

/* Directives */
crossTrackDirectives.directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  });
