describe('testing directive password', function() {
	var $scope, element, scope;
	var html = '<password data-password="{{password}}" '
			+ 'data-repeat="{{password2}}"></password>';

	beforeEach(module('app'));

	beforeEach(inject(function($rootScope, $compile) {
		$scope = $rootScope;

		// load the values to send
		$scope.password = 'abc';
		$scope.password2 = 'abc2';

		// create the element and compile it
		element = angular.element(html);
		$compile(element)($scope);

		// get the scope of this directive
		scope = element.scope();

		$scope.$digest();
	}));

	it("should have a strength of 3", function() {
		expect(scope.strength).toEqual(3);
	});

	it("should not match with the repeated", function() {
		expect(scope.match).toBeFalsy();
	});

	it("should match with the repeated", function() {
		$scope.password2 = 'abc';
		$scope.$digest();
		expect(scope.match).toBeTruthy();
	});
});
