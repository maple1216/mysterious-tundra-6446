'use strict';

/**
 * @ngdoc function
 * @name mysteriousTundra6446App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mysteriousTundra6446App
 */

angular.module('mytodoApp')
 .controller('MainCtrl', function ($scope, localStorageService) {

   var todosInStore = localStorageService.get('todos');

   $scope.todos = todosInStore || [];

   $scope.$watch('todos', function () {
     localStorageService.add('todos', $scope.todos);
   }, true);

   // Uncomment if you are disabling persistence
   //$scope.todos = [];

   $scope.addTodo = function () {
     $scope.todos.push($scope.todo);
     $scope.todo = '';
   };

   $scope.removeTodo = function (index) {
     $scope.todos.splice(index, 1);
   };

 });
