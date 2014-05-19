var app = angular.module('app', []);

app.controller('NewUserCtrl', function($scope) {
	$scope.user = {
		name : null,
		lastname : null,
		username : null
	};

	// generates the username whether both the name, or the lastname changes
	// always in lowercase
	$scope.$watch('user.name', function() {
		updateUserName();
	});

	$scope.$watch('user.lastname', function() {
		updateUserName();
	});

	var updateUserName = function() {
		var name = $scope.user.name;
		var lastname = $scope.user.lastname;

		$scope.user.username = (name !== null) ? name : '';
		$scope.user.username += (lastname !== null) ? lastname : '';

		$scope.user.username = $scope.user.username.toLowerCase();
	};

});
