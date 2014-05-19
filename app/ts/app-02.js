/// <reference path="angular.d.ts" />
/// <reference path="angular-resource.d.ts" />
/// <reference path="angular-route.d.ts" />
var demo;
(function (demo) {
    "use strict";
    (function (Env) {
        Env[Env["PRODUCTION"] = 0] = "PRODUCTION";
        Env[Env["TEST"] = 1] = "TEST";
        Env[Env["DEVELOPMENT"] = 2] = "DEVELOPMENT";
    })(demo.Env || (demo.Env = {}));
    var Env = demo.Env;
    var CustomersFactory = (function () {
        function CustomersFactory($http) {
            this.$http = $http;
        }
        CustomersFactory.prototype.getCustomers = function () {
            // Return a promise for AJAX Call
            return this.$http.get('data/customers.json');
        };
        return CustomersFactory;
    })();
    var OrdersFactory = (function () {
        function OrdersFactory($http) {
            this.$http = $http;
        }
        OrdersFactory.prototype.getOrders = function () {
            // Return a promise for AJAX Call
            return this.$http.get('data/orders.json');
        };
        return OrdersFactory;
    })();
    var OrderFactory = (function () {
        function OrderFactory($http) {
            this.$http = $http;
        }
        OrderFactory.prototype.getOrder = function (customerId, orderId) {
            // Return a promise for AJAX Call
            return this.$http.get('data/order-' + customerId + '-' + orderId + '.json');
        };
        return OrderFactory;
    })();
    var ItemFactory = (function () {
        function ItemFactory($http) {
            this.$http = $http;
        }
        ItemFactory.prototype.getItem = function (customerId, orderId, itemNo) {
            // Must return a promise for AJAX Call but for
            // now is returning hard-coded object
            return {
                success: function (callback) {
                    callback({
                        productName: 'Fake Name',
                        brand: 'Brand',
                        model: 'Model'
                    });
                }
            };
        };
        return ItemFactory;
    })();

    var App = (function () {
        function App(env) {
            this.env = env;
            this.version = '1.0.0';
            this.modules = {};
            this.modules['authfire'] = angular.module('authfire', ['ngRoute', 'ngAnimate']);
            this.modules['orders'] = angular.module('orders', ['ngRoute', 'ngAnimate']);
        }
        App.prototype.buildRoutes = function () {
            var TEMPL_PREFIX = '';
            if (this.env == Env.TEST) {
                TEMPL_PREFIX = 'test/';
            }
            console.log(this.modules);
            this.modules['orders'].config([
                '$routeProvider',
                function ($routeProvider) {
                    $routeProvider.when('/', {
                        controller: 'CustomersController',
                        templateUrl: TEMPL_PREFIX + 'app/views/customers.html'
                    }).when('/orders/:customerId', {
                        controller: 'OrdersController',
                        templateUrl: TEMPL_PREFIX + 'app/views/orders.html'
                    }).when('/orders/:customerId/:orderId', {
                        controller: 'OrderController',
                        templateUrl: TEMPL_PREFIX + 'app/views/order.html'
                    }).when('/item/:customerId/:orderId/:itemNo', {
                        controller: 'ItemController',
                        templateUrl: TEMPL_PREFIX + 'app/views/item.html'
                    }).otherwise({
                        redirectTo: 'app/views/404.html'
                    });
                }
            ]);
        };
        App.prototype.buildControllers = function () {
            this.modules['orders'].controller('CustomersController', [
                '$scope',
                'customersFactory',
                function ($scope, customersFactory) {
                    $scope.customers = null;
                    customersFactory.getCustomers().success(function (custs) {
                        $scope.customers = custs;
                    });
                }
            ]);
            this.modules['orders'].controller('OrdersController', [
                '$scope',
                '$routeParams',
                'ordersFactory',
                'orderFactory',
                function ($scope, $routeParams, ordersFactory, orderFactory) {
                    // console.log($scope); // Class Scope
                    // console.log($routeParams);
                    $scope.customerId = $routeParams.customerId;
                    var filtered = [];
                    var filter = function (elem) {
                        return (elem.customerId == $scope.customerId);
                    };
                    ordersFactory.getOrders().success(function (orders) {
                        for (var i = 0; i < orders.length; i++) {
                            if (filter(orders[i])) {
                                filtered.push(orders[i]);
                            }
                        }
                        $scope.orders = filtered;
                    });
                }
            ]);
            this.modules['orders'].controller('OrderController', [
                '$scope',
                '$routeParams',
                'orderFactory',
                function ($scope, $routeParams, orderFactory) {
                    console.log($routeParams);
                    $scope.customerId = $routeParams.customerId;
                    $scope.orderId = $routeParams.orderId;
                    orderFactory.getOrder($scope.customerId, $scope.orderId).success(function (order) {
                        $scope.order = order;
                    });
                }
            ]);
            this.modules['orders'].controller('ItemController', [
                '$scope',
                '$routeParams',
                'itemFactory',
                function ($scope, $routeParams, itemFactory) {
                    console.log($routeParams);
                    $scope.customerId = $routeParams.customerId;
                    $scope.orderId = $routeParams.orderId;
                    $scope.itemNo = $routeParams.itemNo;

                    itemFactory.getItem($scope.customerId, $scope.orderId, $scope.itemNo).success(function (item) {
                        $scope.item = item;
                    });
                }
            ]);
        };
        App.prototype.buildFactories = function () {
            this.modules['orders'].factory('customersFactory', [
                '$http',
                function ($http) {
                    return new CustomersFactory($http);
                }
            ]);

            this.modules['orders'].factory('ordersFactory', [
                '$http',
                function ($http) {
                    return new OrdersFactory($http);
                }
            ]);

            this.modules['orders'].factory('orderFactory', [
                '$http',
                function ($http) {
                    return new OrderFactory($http);
                }
            ]);

            this.modules['orders'].factory('itemFactory', [
                '$http',
                function ($http) {
                    return new ItemFactory($http);
                }
            ]);
        };

        App.prototype.getEnv = function () {
            return this.env;
        };

        App.prototype.getEnvName = function () {
            return Env[this.env];
        };

        App.prototype.getVersion = function () {
            return this.version;
        };

        App.prototype.getModules = function () {
            return this.modules;
        };

        App.prototype.start = function () {
            this.buildRoutes();
            this.buildControllers();
            this.buildFactories();
        };
        return App;
    })();
    demo.App = App;
})(demo || (demo = {}));

var myDemoApp = new demo.App(demo.Env.DEVELOPMENT);
var myDemoAppEnvironment = demo.Env[myDemoApp.getEnv()];
var myDemoAppReferences = [
    myDemoApp.getVersion(),
    myDemoApp.getEnvName(),
    myDemoApp.getModules()['orders'].name,
    myDemoAppEnvironment
];
myDemoApp.start();
