/// <reference path="angular.d.ts" />
/// <reference path="angular-resource.d.ts" />
/// <reference path="angular-route.d.ts" />

module demo {
    "use strict";
    export enum Env {
        PRODUCTION,
        TEST,
        DEVELOPMENT
    }
    class CustomersFactory {
        constructor(private $http) {
        }
        getCustomers(): ng.IPromise<any> {
            // Return a promise for AJAX Call
            return this.$http.get('data/customers.json');
        }
    }
    class OrdersFactory {
        constructor(private $http) {
        }
        getOrders(): ng.IPromise<any> {
            // Return a promise for AJAX Call
            return this.$http.get('data/orders.json');
        }
    }
    class OrderFactory {
        constructor(private $http) {
        }
        getOrder(customerId, orderId): ng.IPromise<any> {
            // Return a promise for AJAX Call
            return this.$http.get('data/order-' + customerId + '-' + orderId
                + '.json');
        }
    }
    class ItemFactory {
        constructor(private $http) {
        }
        getItem(customerId, orderId, itemNo) {
            // Return a promise for AJAX Call but for now return 
            // hard-coded object
            var retObj = {
                productName: 'Fake Name',
                brand: 'Fake Brand',
                model: 'Fake Model'
            };
            // emulando parcialmente uma interface ng.IPromise<any> 
            return {
                success: function(callback) {
                    callback(retObj);
                }
            };
        }
    }

    export class App {
        private modules = [];
        constructor(private env: Env) {
            this.env = env;
            this.modules['authfire'] = angular.module('authfire', ['ngRoute', 'ngAnimate']);
            this.modules['orders'] = angular.module('orders', ['ngRoute', 'ngAnimate']);
        }
        private buildRoutes() {
            var TEMPL_PREFIX = '';
            if (this.env == Env.TEST) {
                TEMPL_PREFIX = 'test/';
            }
            this.modules['orders'].config(function($routeProvider) {
                $routeProvider.when('/', { // Default Route
                    controller: 'CustomersController',
                    templateUrl: TEMPL_PREFIX + 'app/views/customers.html'
                });
                $routeProvider.when('/orders/:customerId', {
                    controller: 'OrdersController',
                    templateUrl: TEMPL_PREFIX + 'app/views/orders.html'
                });
                $routeProvider.when('/orders/:customerId/:orderId', {
                    controller: 'OrderController',
                    templateUrl: TEMPL_PREFIX + 'app/views/order.html'
                });
                $routeProvider.when('/item/:customerId/:orderId/:itemNo', {
                    controller: 'ItemController',
                    templateUrl: TEMPL_PREFIX + 'app/views/item.html'
                });
            });
        }
        private buildControllers() {
            this.modules['orders'].controller('CustomersController', function($scope, customersFactory) {
                $scope.customers = null;

                function init() {
                    customersFactory.getCustomers().success(function(custs) {
                        $scope.customers = custs;
                        // console.log(custs);
                    });
                }

                init();
            });
            this.modules['orders'].controller('OrdersController', function($scope, $routeParams,
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
            this.modules['orders'].controller('OrderController', function($scope, $routeParams,
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
            this.modules['orders'].controller('ItemController', function($scope, $routeParams, itemFactory) {
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
        }
        private buildFactories() {
            this.modules['orders'].factory('customersFactory', function($http) {
                return new CustomersFactory($http);
            });

            this.modules['orders'].factory('ordersFactory', function($http) {
                return new OrdersFactory($http);
            });

            this.modules['orders'].factory('orderFactory', function($http) {
                return new OrderFactory($http);
            });

            this.modules['orders'].factory('itemFactory', function($http) {
                return new ItemFactory($http);
            });
        }
        public getEnv() { return this.env; }
    }
}

var myDemoApp = new demo.App(demo.Env.PRODUCTION); 
