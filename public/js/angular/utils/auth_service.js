app.service('authService', function($http, $rootScope, $cookieStore){
  return {
    login: function(user){
      return $http.post('/login', user);
    },
    isLoggedIn: function(){
      var access_token = $cookieStore.get('access_token');
      return !(typeof access_token === 'undefined' || access_token === null);
    },
    logout: function(){
      return $http.delete('/logout');
    }
  }
})
