// Veja exemplo com objeto myclazz e seus atributos e métodos.

/**
 * @type {Object}
 * @const
 */
var myclazz = {};

/**
 * @param {Object} self
 * @param {Function} fn
 * @param {...*} args
 * @return {Function}
 */
myclazz.bind = function(self, fn, args) {};

/**
 * @typedef {{
 *   $$phase: string,
 *   $id: string,
 *   $new: function(boolean=):myclazz.Scope,
 *   }}
 */
myclazz.Scope;

/** @type {string} */
myclazz.Scope.$$phase;

/** @type {string} */
myclazz.Scope.$id;

/**
 * @param {boolean=} opt_isolate
 * @return {myclazz.Scope}
 */
myclazz.Scope.$new = function(opt_isolate) {};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

/**
 * @type {Object}
 */
var Env = {};
Env.PRODUCTION = {};
Env.TEST = {};
Env.DEVELOPMENT = {};

/**
 * @type {Object}
 */
var myDemoApp = {};

myDemoApp.getEnv = function() { };
myDemoApp.getEnvName = function() { };
myDemoApp.getVersion = function() { };
myDemoApp.getModules = function() { };
myDemoApp.start = function() { };

/**
 * @type {Object}
 */
var $scope = {};
$scope.customers = {};
$scope.customerId = {};
$scope.itemNo = {};
$scope.order = {};
$scope.orderId = {};
$scope.orders = {};

/**
 * @type {Object}
 */
var item = {};
item.productName = {};
item.brand = {};
item.model = {}; 

/**
 * @type {Object}
 */
var itemOfOrder = {};
itemOfOrder.itemNo = 1;
itemOfOrder.qty = 1.0;
itemOfOrder.productName = '';
itemOfOrder.value = 1.1;

/**
 * @type {Object}
 */
var order = {};
order.id = 1;
order.orderDate = 1;
order.customerId = 1;
order.name = '';
order.total = 1.1;
order.itens = []; // array de itemOfOrder
/**
 * @type {Object}
 */
var orders = []; // array de order

/**
 * @type {Object}
 */
var customer = {};
customer.id = 1;
customer.name = '';
customer.total = 1.1;

/**
 * @type {Object}
 */
var customers = []; // array de customer
	
	



	
