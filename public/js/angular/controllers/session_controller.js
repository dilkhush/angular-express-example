app.controller('SessionCtrl', ['$scope', '$location', '$http', function($scope, $location, $http) {
	$scope.isLoggedIn = function(){
		$scope.logged_in = true
		if($scope.logged_in) $location.url('/users');
	}
}])