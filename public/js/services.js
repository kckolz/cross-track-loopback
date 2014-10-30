'use strict';

var crossTrackServices = angular.module('crossTrackServices', []);

/* Services */
crossTrackServices.factory('AppService', ['$http', '$q', function($http, $q){

	return{
        getUsers: function(){
            return users;
        }
    };
}]);