var exerciseControllers = angular.module('exerciseControllers', []);

exerciseControllers.controller('ExerciseController', ['$scope','Exercise', 
  function($scope, Exercise) { 
    $scope.exercises = []; 

    function getExercises() { 
      Exercise.find().$promise.then(function(results) { 
        $scope.exercises = results; 
      }); 
    } getExercises();

    $scope.addExercise = function() {
      Exercise
        .create($scope.newExercise)
        .$promise
        .then(function(exercise) {
          $scope.newExercise = '';
          $scope.exerciseForm.content.$setPristine();
          $('.focus').focus(); //JQuery hack for refocusing text input
          getExercises();
        });
    };

    $scope.removeExercise = function(item) {
      Exercise
        .deleteById(item)
        .$promise
        .then(function() {
          getExercises();
        });
    };
}]);