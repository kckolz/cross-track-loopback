'use strict';

var crossTrackFilters = angular.module('crossTrackFilters', []);

/* Filters */
crossTrackFilters.filter('interpolate', function (version) {
    return function (text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  });
