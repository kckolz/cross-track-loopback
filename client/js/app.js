'use strict';

var crossTrackApp = angular.module('crossTrackApp',[ 
    'ngRoute',
    'lbServices',
    'exerciseControllers'
  ]);

crossTrackApp.config(['$routeProvider', '$httpProvider',
    function ($routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'html/exercise.html',
                controller: 'ExerciseController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);