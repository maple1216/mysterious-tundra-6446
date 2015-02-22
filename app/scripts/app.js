'use strict';

/**
 * @ngdoc overview
 * @name mysteriousTundra6446App
 * @description
 * # mysteriousTundra6446App
 *
 * Main module of the application.
 */
angular.module('mytodoApp', [
'ngCookies',
'ngResource',
'ngSanitize',
'ngRoute',
'ui.sortable',
'LocalStorageModule'
])
.config(['localStorageServiceProvider', '$routeProvider', function(localStorageServiceProvider, $routeProvider){
 localStorageServiceProvider.setPrefix('ls');
 $routeProvider
   .when('/', {
     templateUrl: 'views/main.html',
     controller: 'MainCtrl'
   })
   .otherwise({
     redirectTo: '/'
   });
}]);
