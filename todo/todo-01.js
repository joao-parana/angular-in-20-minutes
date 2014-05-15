var TodoCtrl = (function(angular) {
	function TodoCtrl($scope) {
		$scope.todos = [ {
			text : 'learn angular',
			done : true
		}, {
			text : 'build an angular app',
			done : false
		} ];

		$scope.alltodos = $scope.todos;

		$scope.addTodo = function() {
			var todo = {
				text : $scope.todoText,
				done : false
			};
			$scope.todos.push(todo);
			$scope.alltodos.push(todo);
			$scope.todoText = '';
		};

		$scope.remaining = function() {
			var count = 0;
			angular.forEach($scope.alltodos, function(todo) {
				count += todo.done ? 0 : 1;
			});
			return count;
		};

		$scope.archive = function() {
			$scope.todos = [];
			angular.forEach($scope.alltodos, function(todo) {
				if (!todo.done)
					$scope.todos.push(todo);
			});
		};

		$scope.all = function() {
			console.log('método all invocado');
			$scope.todos = $scope.alltodos;
			angular.forEach($scope.alltodos, function(todo) {
				console.log(todo);
			});
			console.log('' + $scope.todos.length + ' todos');
		};
	}
	return TodoCtrl;
})(angular);