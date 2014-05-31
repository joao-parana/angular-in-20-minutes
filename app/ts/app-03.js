var common;
(function (common) {
    "use strict";
    (function (Env) {
        Env[Env["PRODUCTION"] = 0] = "PRODUCTION";
        Env[Env["TEST"] = 1] = "TEST";
        Env[Env["DEVELOPMENT"] = 2] = "DEVELOPMENT";
    })(common.Env || (common.Env = {}));
    var Env = common.Env;
})(common || (common = {}));
/// <reference path="angular.d.ts" />
/// <reference path="angular-resource.d.ts" />
/// <reference path="angular-route.d.ts" />
/// <reference path="common.ts" />
var demo3;
(function (demo3) {
    "use strict";
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

            angular.module('authfire', ['ngRoute', 'ngAnimate']);
            angular.module('orders', ['ngRoute', 'ngAnimate']);
            this.modules = [
                angular.module('authfire'),
                angular.module('orders')
            ];
        }
        App.prototype.buildRoutes = function () {
            var TEMPL_PREFIX = '';
            if (this.env == common.Env.TEST) {
                TEMPL_PREFIX = 'test/';
            }

            angular.module('orders').config(function ($routeProvider, $locationProvider) {
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
            });
        };
        App.prototype.buildControllers = function () {
            angular.module('orders').controller('CustomersController', function ($scope, customersFactory) {
                $scope.customers = null;
                customersFactory.getCustomers().success(function (custs) {
                    $scope.customers = custs;
                });
            });
            angular.module('orders').controller('OrdersController', function ($scope, $routeParams, ordersFactory, orderFactory) {
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
            });
            angular.module('orders').controller('OrderController', function ($scope, $routeParams, orderFactory) {
                // console.log($routeParams);
                $scope.customerId = $routeParams.customerId;
                $scope.orderId = $routeParams.orderId;
                orderFactory.getOrder($scope.customerId, $scope.orderId).success(function (order) {
                    $scope.order = order;
                });
            });
            angular.module('orders').controller('ItemController', function ($scope, $routeParams, itemFactory) {
                // console.log($routeParams);
                $scope.customerId = $routeParams.customerId;
                $scope.orderId = $routeParams.orderId;
                $scope.itemNo = $routeParams.itemNo;

                itemFactory.getItem($scope.customerId, $scope.orderId, $scope.itemNo).success(function (item) {
                    $scope.item = item;
                });
            });
        };
        App.prototype.buildFactories = function () {
            angular.module('orders').factory('customersFactory', function ($http) {
                return new CustomersFactory($http);
            });

            angular.module('orders').factory('ordersFactory', function ($http) {
                return new OrdersFactory($http);
            });

            angular.module('orders').factory('orderFactory', function ($http) {
                return new OrderFactory($http);
            });

            angular.module('orders').factory('itemFactory', function ($http) {
                return new ItemFactory($http);
            });
        };

        App.prototype.getEnv = function () {
            return this.env;
        };

        App.prototype.getEnvName = function () {
            return common.Env[this.env];
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
    demo3.App = App;
})(demo3 || (demo3 = {}));

var myDemoApp = new demo3.App(common.Env.DEVELOPMENT);

// Uso efeito colateral apenas para o Clousure Compiler
// não remover o código das funções na otimização
var myCollateral = [
    myDemoApp.getVersion(),
    myDemoApp.getEnvName(),
    myDemoApp.getModules().orders.name
];
myDemoApp.start();
