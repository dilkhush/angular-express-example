app.service('userService', function($http, $cookieStore){
  return {
    users: function(){
      return $http.get('/api/v1/users?access_token='+$cookieStore.get('access_token'));
    },
    show: function(id){
      return $http.get('/api/v1/users/'+id+'?access_token='+$cookieStore.get('access_token'));
    },
    delete: function(id){
      return $http.delete('/api/v1/users/'+id+'?access_token='+$cookieStore.get('access_token'));
    },
    create: function(user){
      return $http.post('/api/v1/users?access_token='+$cookieStore.get('access_token'), user);
    },
    update: function(user){
      return $http.put('/api/v1/users/'+user._id+'?access_token='+$cookieStore.get('access_token'), user);
    }
  }
});
