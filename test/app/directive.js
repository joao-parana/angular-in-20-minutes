var app = angular.module('app', []);

app.directive('password', function() {
	return {
		restrict : 'E',
		template : '<div><span id="indicator">{{strength}}</span>'
				+ ' <span id="match">{{ match }}</span></div>',
		transclude : true,
		scope : {
			password : '@',
			repeat : '@'
		},
		link : function($scope, elem, attrs) {
			$scope.strength = '0';
			$scope.match = false;

			// check strength
			$scope.$watch('password', function(value) {
				$scope.strength = value.length;
			});
			// check if match
			$scope.$watch('repeat', function(value) {
				$scope.match = value == $scope.password;
			});
		}
	};
});

