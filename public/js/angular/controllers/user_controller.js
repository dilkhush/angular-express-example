app.controller('UserCtrl', ['$scope', 'userService', '$routeParams', '$location', function($scope, userService, $routeParams, $location) {
  $scope.getUsers = function(){	
  	userService.users().then(function(responce){
  		if(responce.data.status == 200)
  			$scope.users = responce.data.users;
  		else
  			showMessage('alert-danger', responce.data.message);
  	});
  }

  $scope.getUser = function(){
  	userService.show($routeParams.id).then(function(responce){
  		if(responce.data.status == 200)
	  		$scope.user = responce.data.user;
  		else
  			showMessage('alert-danger', responce.data.message);
  	})
  }

  $scope.deleteUser = function(id){
  	userService.delete(id).then(function(responce){
  		if(responce.data.status == 200)
  			$location.url('/users');
  		else
  			showMessage('alert-danger', responce.data.message);
  	})	
  }
}]);