var app = angular.module('test', ['ngCookies'])
  
  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', { templateUrl: 'angular/views/login.html' }).
      when('/login', { templateUrl: 'angular/views/login.html' }).
      when('/users', { templateUrl: 'angular/views/list.html' }).
      when('/users/new', { templateUrl: 'angular/views/new.html' }).
      when('/users/:id/show', { templateUrl: 'angular/views/show.html' }).
      when('/users/:id/edit', { templateUrl: 'angular/views/edit.html' }).
      otherwise({ redirectTo: '/' });
  }]);

app.factory('requestInterceptor', ['$cookieStore', function($cookieStore){
  return {
    request: function(config){
      var token = $cookieStore.get('access_token');
      if(typeof token != 'undefined')
        config.url = config.url + '?access_token='+token
      return config;
    }
  }
}])

app.config(['$httpProvider', function($httpProvider){
  $httpProvider.interceptors.push('requestInterceptor')
}])
