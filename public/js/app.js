var app = angular.module('test', [])
  
  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', { templateUrl: 'angular/views/list.html' }).
      when('/users', { templateUrl: 'angular/views/list.html' }).
      when('/users/:id/show', { templateUrl: 'angular/views/show.html' }).
      otherwise({ redirectTo: '/' });
  }]);