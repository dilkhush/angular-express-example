app.controller('SessionCtrl', ['$scope', '$location', '$http', '$rootScope', 'authService', '$cookieStore', function($scope, $location, $http, $rootScope, authService, $cookieStore) {
  $scope.isLoggedIn = function(){
    $scope.logged_in = $scope.isTokenExist();
    if($scope.logged_in) $location.url('/users');
  }

  $scope.login = function(){
    authService.login($scope.user).then(function(responce){
      if(responce.data.status == 201){
        $cookieStore.put('access_token', responce.data.user.access_token)
        $location.url('/users')
        showMessage('alert-success', responce.data.message);
      }else{
        showMessage('alert-danger', responce.data.message);
      }
    })
  }

  $scope.logout = function(){
    authService.logout().then(function(responce){
      if(responce.data.status == 200){
        $cookieStore.remove('access_token')
        $location.url('/login')
        showMessage('alert-success', responce.data.message);
      }else{
        showMessage('alert-danger', responce.data.message);
      }
    });
  }

  $scope.isTokenExist = function(){
    return authService.isLoggedIn();
  }
}])
