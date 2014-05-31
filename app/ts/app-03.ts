/// <reference path="angular.d.ts" />
/// <reference path="angular-resource.d.ts" />
/// <reference path="angular-route.d.ts" />
/// <reference path="common.ts" />

module demo3 {
    "use strict";
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
            return this.$http.get('data/order-' + customerId + '-'
                + orderId + '.json');
        }
    }
    class ItemFactory {
        constructor(private $http) {
        }
        getItem(customerId, orderId, itemNo) {
            // Must return a promise for AJAX Call but for  
            // now is returning hard-coded object
            return {
                success: (callback) => {
                    callback({
                        productName: 'Fake Name', brand: 'Brand'
                        , model: 'Model'
                    })
                }
            }
        }
    }

    export class App {
        private modules: any;
        private version: string;
        constructor(private env: common.Env) {
            this.version = '1.0.0';

            angular.module('authfire'
                , ['ngRoute', 'ngAnimate']);
            angular.module('orders'
                , ['ngRoute', 'ngAnimate']);
            this.modules = [angular.module('authfire')
                , angular.module('orders')];
        }
        private buildRoutes() {
            var TEMPL_PREFIX = '';
            if (this.env == common.Env.TEST) {
                TEMPL_PREFIX = 'test/';
            }

            angular.module('orders').config(
                function($routeProvider, $locationProvider) {
                    $routeProvider.when('/', {  // Default Route
                        controller: 'CustomersController',
                        templateUrl: TEMPL_PREFIX + 'app/views/customers.html'
                        /*, resolve: { data: dataLoaderRunner }*/
                    }).when('/orders/:customerId', {
                            controller: 'OrdersController',
                            templateUrl: TEMPL_PREFIX + 'app/views/orders.html'
                        }).when('/orders/:customerId/:orderId', {
                            controller: 'OrderController',
                            templateUrl: TEMPL_PREFIX + 'app/views/order.html'
                        }).when('/item/:customerId/:orderId/:itemNo', {
                            controller: 'ItemController',
                            templateUrl: TEMPL_PREFIX + 'app/views/item.html'
                        }).
                        otherwise({
                            redirectTo: 'app/views/404.html'
                        });
                });
        }
        private buildControllers() {
            angular.module('orders').controller('CustomersController',
                function(
                    $scope, customersFactory) {
                    $scope.customers = null;
                    customersFactory.getCustomers().success(function(custs) {
                        $scope.customers = custs;
                    });
                });
            angular.module('orders').controller('OrdersController'
                , function(
                    $scope, $routeParams, ordersFactory, orderFactory) {
                    // console.log($scope); // Class Scope
                    // console.log($routeParams);
                    $scope.customerId = $routeParams.customerId;
                    var filtered = [];
                    var filter = (elem) => { 
                    return (elem.customerId == $scope.customerId)
                    };
                    ordersFactory.getOrders().success(function(orders) {
                        for (var i = 0; i < orders.length; i++) {
                            if (filter(orders[i])) {
                                filtered.push(orders[i]);
                            }
                        }
                        $scope.orders = filtered;
                    });
                });
            angular.module('orders').controller('OrderController'
                , function(
                    $scope, $routeParams, orderFactory) {
                    // console.log($routeParams);
                    $scope.customerId = $routeParams.customerId;
                    $scope.orderId = $routeParams.orderId;
                    orderFactory.getOrder($scope.customerId, $scope.orderId)
                        .success(function(order) {
                            $scope.order = order;
                        });
                });
            angular.module('orders').controller('ItemController'
                , function(
                    $scope, $routeParams, itemFactory) {
                    // console.log($routeParams);
                    $scope.customerId = $routeParams.customerId;
                    $scope.orderId = $routeParams.orderId;
                    $scope.itemNo = $routeParams.itemNo;

                    itemFactory.getItem($scope.customerId, $scope.orderId
                        , $scope.itemNo).success(
                        function(item) {
                            $scope.item = item;
                        });
                });
        }
        private buildFactories() {
            angular.module('orders').factory('customersFactory'
                , function($http) {
                    return new CustomersFactory($http);
                });

            angular.module('orders').factory('ordersFactory'
                , function($http) {
                    return new OrdersFactory($http);
                });

            angular.module('orders').factory('orderFactory'
                , function($http) {
                    return new OrderFactory($http);
                });

            angular.module('orders').factory('itemFactory', function($http) {
                return new ItemFactory($http);
            });
        }

        public getEnv() { return this.env; }

        public getEnvName() { return common.Env[this.env]; }

        public getVersion() { return this.version; }

        public getModules() { return this.modules; }

        public start() {
            this.buildRoutes();
            this.buildControllers()
            this.buildFactories();
        }
    }
}

var myDemoApp = new demo3.App(common.Env.DEVELOPMENT);
// Uso efeito colateral apenas para o Clousure Compiler 
// não remover o código das funções na otimização 
var myCollateral = [myDemoApp.getVersion(), myDemoApp.getEnvName()
    , myDemoApp.getModules().orders.name];
myDemoApp.start();
