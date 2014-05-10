# AngularJS in 20ish Minutes 
## NG-Conf 2014

> Dan Wahlin - https://www.youtube.com/watch?v=tnXO-i7944M

##### See the index.html file below 

```xml
<!DOCTYPE html>
<html ng-app="demoApp">
<head>
	<title>Angular App</title>
	<link href="styles/animations.css" rel="stylesheet" />
</head>
<body>
    <h1>AngularJS in 20-ish Minutes</h1>
    
    <div ng-view class="slide-animation"></div>
    
    <script src="js/angular.js"></script>
    <script src="js/angular-route.js"></script>
    <script src="js/angular-animation.js"></script>
    <script>
        var app = angular.module('demoApp',['ngRoute', 'ngAnimate']);
        
        app.config(function($routeProvider) {
            $routeProvider.when('/',
            {
                controller: 'CustomersController',
                templateUrl: 'app/views/customers.html'
            })
            .when('/orders/:customerId',
            {
                controller: 'OrdersController',
                templateUrl: 'app/views/orders.html'
            })
        });
        
        app.controller('CustomersController', function($scope, customersFactory) {
            $scope.customers = null;
            
            function init() {
                customersFactory.getCustomers().success(function(custs) {
                    $scope.customers = custs;
                    alert(custs.data.length);
                });
            }
            
            init();
        });
        
        app.controller('OrdersController', function($scope, $routeParams) {
            $scope.customerId = $routeParams.customerId;
        });
        
        app.factory('customersFactory', function($http) { 
            var factory = {};
            factory.getCustomers = function() {
                return $http.get('/customers.json');
            };
            return factory;
        });
        
    </script>
</body>
</html>
```

##### Others files:

[app/views/customers.html](https://github.com/joao-parana/angular-in-20-minutes/blob/master/app/views/customers.html)  
[app/views/orders.html](https://github.com/joao-parana/angular-in-20-minutes/blob/master/app/views/orders.html)
