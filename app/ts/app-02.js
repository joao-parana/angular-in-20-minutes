var demo;
(function(demo) {
	"use strict";

	(function(Env) {
		Env[Env["PRODUCTION"] = 0] = "PRODUCTION";
		Env[Env["TEST"] = 1] = "TEST";
		Env[Env["DEVELOPMENT"] = 2] = "DEVELOPMENT";
	})(demo.Env || (demo.Env = {}));
	var Env = demo.Env;

	var CustomersFactory = (function() {
		function CustomersFactory($http) {
			this.$http = $http;
		}
		CustomersFactory.prototype.getCustomers = function() {
			// Return a promise for AJAX Call
			return this.$http.get('data/customers.json');
		};
		return CustomersFactory;
	})();
	var App = (function() {
		function App(env) {
			this.env = env;
			this.modules = [];
			this.env = env;
			this.modules['authfire'] = angular.module('authfire', [ 'ngRoute',
					'ngAnimate' ]);
			this.modules['orders'] = angular.module('orders', [ 'ngRoute',
					'ngAnimate' ]);
		}
		App.prototype.buildRoutes = function() {
			this.modules['orders'].config(function($routeProvider) {
				$routeProvider.when('/', {
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
		};
		App.prototype.buildControllers = function() {
			this.modules['orders'].controller('CustomersController', function(
					$scope, customersFactory) {
				$scope.customers = null;

				function init() {
					customersFactory.getCustomers().success(function(custs) {
						$scope.customers = custs;
						// console.log(custs);
					});
				}

				init();
			});
			this.modules['orders'].controller('OrdersController', function(
					$scope, $routeParams, ordersFactory, orderFactory) {
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
			this.modules['orders'].controller('OrderController', function(
					$scope, $routeParams, orderFactory) {
				console.log($routeParams);

				// console.log(orderFactory);
				var customerId = $routeParams.customerId;
				var orderId = $routeParams.orderId;
				$scope.customerId = customerId;
				$scope.orderId = orderId;

				function updateScopeWithOrder(customerId, orderId) {
					orderFactory.getOrder(customerId, orderId).success(
							function(order) {
								$scope.order = order;
								// console.log(order);
							});
				}

				updateScopeWithOrder(customerId, orderId);
			});
			this.modules['orders'].controller('ItemController', function(
					$scope, $routeParams, itemFactory) {
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
		};
		App.prototype.buildFactories = function() {
			this.modules['orders'].factory('customersFactory', function($http) {
				return new CustomersFactory($http);
			});

			this.modules['orders'].factory('ordersFactory', function($http) {
				var factory;
				factory.getOrders = function() {
					// Return a promise for AJAX Call
					return $http.get('data/orders.json');
				};
				return factory;
			});

			this.modules['orders'].factory('orderFactory', function($http) {
				var factory;
				factory.getOrder = function(customerId, orderId) {
					// Return a promise for AJAX Call
					return $http.get('data/order-' + customerId + '-' + orderId
							+ '.json');
				};
				return factory;
			});

			this.modules['orders'].factory('itemFactory', function($http) {
				var factory;
				factory.getItem = function(customerId, orderId, itemNo) {
					// Return a promise for AJAX Call but for now return
					// hard-coded
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
		};
		App.prototype.getEnv = function() {
			return this.env;
		};
		return App;
	})();
	demo.App = App;
})(demo || (demo = {}));

var myDemoApp = new demo.App(demo.Env.PRODUCTION);
