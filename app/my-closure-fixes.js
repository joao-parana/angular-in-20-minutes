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
var myDemoAppEnvironment = {};

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




	