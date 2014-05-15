var myDemoApp = (function(angular) {
	var app = angular.module('demoApp', [ 'ngRoute', 'ngAnimate' ]);

	app.config(function($routeProvider) {
		$routeProvider.when('/', { // Default Route
			controller : 'CustomersController',
			templateUrl : 'app/views/customers.html'
		}).when('/orders/:customerId', {
			controller : 'OrdersController',
			templateUrl : 'app/views/orders.html'
		}).when('/orders/:customerId/:orderId', {
			controller : 'OrderController',
			templateUrl : 'app/views/order.html'
		}).when('/item/:customerId/:orderId/:itemNo', {
			controller : 'ItemController',
			templateUrl : 'app/views/item.html'
		});
	});

	app.controller('CustomersController', function($scope, customersFactory) {
		$scope.customers = null;

		function init() {
			customersFactory.getCustomers().success(function(custs) {
				$scope.customers = custs;
				// console.log(custs);
			});
		}

		init();
	});

	app.controller('OrdersController', function($scope, $routeParams,
			ordersFactory, orderFactory) {
		// console.log($scope); // Class Scope
		// console.log($routeParams);
		$scope.customerId = $routeParams.customerId;

		function updateScopeWithOrders() {
			ordersFactory.getOrders().success(function(orders) {
				var filtered = [];
				for (var i = 0; i < orders.length; i++) {
					if (orders[i].customerId == $scope.customerId) {
						filtered.push(orders[i]);
					}
				}
				$scope.orders = filtered;
			});
		}

		updateScopeWithOrders();
	});

	app.controller('OrderController', function($scope, $routeParams,
			orderFactory) {
		console.log($routeParams);
		// console.log(orderFactory);
		var customerId = $routeParams.customerId;
		var orderId = $routeParams.orderId;
		$scope.customerId = customerId;
		$scope.orderId = orderId;

		function updateScopeWithOrder(customerId, orderId) {
			orderFactory.getOrder(customerId, orderId).success(function(order) {
				$scope.order = order;
				// console.log(order);
			});
		}

		updateScopeWithOrder(customerId, orderId);
	});

	app.controller('ItemController',
			function($scope, $routeParams, itemFactory) {
				console.log($routeParams);
				// console.log(orderFactory);
				var customerId = $routeParams.customerId;
				var orderId = $routeParams.orderId;
				var itemNo = $routeParams.itemNo;
				$scope.customerId = customerId;
				$scope.orderId = orderId;
				$scope.itemNo = itemNo;

				function updateScopeWithItem(customerId, orderId, itemNo) {
					itemFactory.getItem(customerId, orderId, itemNo).success(
							function(item) {
								$scope.item = item;
								// console.log(item);
							});
				}

				updateScopeWithItem(customerId, orderId, itemNo);
			});

	app.factory('customersFactory', function($http) {
		var factory = {};
		factory.getCustomers = function() {
			// Return a promise for AJAX Call
			return $http.get('data/customers.json');
		};
		return factory;
	});

	app.factory('ordersFactory', function($http) {
		var factory = {};
		factory.getOrders = function() {
			// Return a promise for AJAX Call
			return $http.get('data/orders.json');
		};
		return factory;
	});

	app.factory('orderFactory', function($http) {
		var factory = {};
		factory.getOrder = function(customerId, orderId) {
			// Return a promise for AJAX Call
			return $http.get('data/order-' + customerId + '-' + orderId
					+ '.json');
		};
		return factory;
	});

	app.factory('itemFactory', function($http) {
		var factory = {};
		factory.getItem = function(customerId, orderId, itemNo) {
			// Return a promise for AJAX Call but for now return hard-coded
			// object
			var retObj = {
				productName : 'Fake Name',
				brand : 'Fake Brand',
				model : 'Fake Model'
			};

			return {
				success : function(callback) {
					callback(retObj);
				}
			};
		};
		return factory;
	});
	return app;
})(angular);
