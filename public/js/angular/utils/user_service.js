app.service('userService', function($http, $cookieStore){
  return {
    users: function(){
      return $http.get('/api/v1/users');
    },
    show: function(id){
      return $http.get('/api/v1/users/'+id);
    },
    delete: function(id){
      return $http.delete('/api/v1/users/'+id);
    },
    create: function(user){
      return $http.post('/api/v1/users', user);
    },
    update: function(user){
      return $http.put('/api/v1/users/'+user._id, user);
    }
  }
});
