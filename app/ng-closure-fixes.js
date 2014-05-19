// 
// This files contains ES6, JQuery-1.9 and Angular 1.3 External Definitions
// for use with Closure Compiler like command below
// java -jar compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS \
// --js whatever-file.js --js_output_file whatever-file-min.js \
// --externs 'ng-closure-fixes.js'
// 
/*
 * Copyright 2014 The Closure Compiler Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Definitions for ECMAScript 6.
 * @see http://people.mozilla.org/~jorendorff/es6-draft.html
 * @externs
 * @author johnlenz@google.com (johnlenz)
 */

// TODO(johnlenz): flesh out the type information in this file.

/** @typedef {?} */
var symbol;

/**
 * @param {string} description
 * @return {symbol}
 */
function Symbol(description) {}




/**
 * @constructor
 * // @extends {null} // A non-Object, property container
 */
var Module;

/**
 * @constructor
 */
var Realm;

/**
 * @constructor
 * @param {{
 *     realm:(Realm|undefined),
 *     normalize:Function,
 *     locate:Function,
 *     fetch:Function,
 *     translate:Function,
 *     instantiate:Function}=} opt_options
 */
function Loader(opt_options) {}

/** @return {Iterator.<[string, Module]>}*/
Loader.prototype.entries;


/**
 * @param {string} name
 * @param {string} source
 * @param {{
 *     address:string,
 *     metadata:string
 * }=} opt_options
 * @return {Promise.<undefined>}
 * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-%loader%.prototype.define
 */
Loader.prototype.define;

/**
 * @param {string} name
 * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-loader.prototype.delete
 */
Loader.prototype.delete;


/**
 * @return {Iterator.<[string, Module]>}
 * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-loader.prototype.entries
 */
Loader.prototype.entries;

/**
 * @param {string} name
 * @return {*}
 * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-loader.prototype.eval
 */
Loader.prototype.eval;

/**
 * @param {string} name
 * @return {Module|undefined}
 * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-loader.prototype.get
 */
Loader.prototype.get;


/**
 * @const {Object}
 * This is really an instance constant
 * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-get-loader.prototype.global
 */
Loader.prototype.global;

/**
 * @param {string} name
 * @return {boolean}
 * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-loader.prototype.has
 */
Loader.prototype.has;


/**
 * @param {string} name
 * @param {{
 *     address:string
 * }=} opt_options
 * @return {Promise.<Module>}
 * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-loader.prototype.import
 */
Loader.prototype.import;

/**
 * @return {Iterator.<string>}
 * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-loader.prototype.keys
 */
Loader.prototype.keys;

/**
 * @param {string} name
 * @param {{
 *     address:string
 * }=} opt_options
 * @return {Promise.<Module>}
 * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-loader.prototype.load
 */
Loader.prototype.load;

/**
 * @param {{
 *     address:string
 * }=} opt_options
 * @return {Promise.<Module>}
 * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-loader.prototype.module
 */
Loader.prototype.module;

/**
 * @param {!Object=} opt_options
 * @return {Module}
 * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-loader.prototype.module
 */
Loader.prototype.newModule;

/**
 * @const {Realm}
 * TODO: This is really an instance constant, define this as an ES6
 * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-get-loader.prototype.realm
 */
Loader.prototype.realm;


/**
 * @return {Iterator.<Module>}
 * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-loader.prototype.values
 */
Loader.prototype.keys;

/**
 * @param {string} name
 * @param {string} refererName
 * @param {string} refererAddress
 * @return {Promise.<string>}
 * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-loader.prototype.normalize
 */
Loader.prototype.normalize;

/**
 * @param {{name: string}} loadRequest
 * @return {Promise.<string>} The URL for the request
 * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-loader.prototype.locate
 */
Loader.prototype.locate;

/**
 * @param {{address: string}} loadRequest
 * @return {Promise.<string>} The requested module source.
 * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-loader.prototype.fetch
 */
Loader.prototype.fetch;

/**
 * @param {{source: string}} load
 * @return {Promise.<string>} The translated source.
 * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-loader.prototype.translate
 */
Loader.prototype.translate;

/**
 * @param {{address: string, source: string}} load
 * @return {Promise.<(undefined|{
 *   deps:Array.<string>,
 *   execute:(function(...[Module]):Promise.<Module>)
 *   })>} The requested module.
 * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-loader.prototype.instantiate
 */
Loader.prototype.instantiate;





/** @const {Loader} */
var System;




// TODO(johnlenz): add externs for std:iteration, GeneratorFunction etc.
// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorfunction

/**
 * @interface
 * @see http://people.mozilla.org/~jorendorff/es6-draft.html#sec-iterator-interface
 */
var Iterator;
Iterator.prototype.next;

/**
 * @interface
 * @see http://people.mozilla.org/~jorendorff/es6-draft.html#sec-generator-objects
 * @extends {Iterator}
 */
var Generator;
Generator.prototype.next;
Generator.prototype.throw;

/** @constructor */
function Map(opt_iterable) {}
Map.prototype.clear;
Map.prototype.delete;
Map.prototype.entries;
Map.prototype.forEach;
Map.prototype.get;
Map.prototype.has;
Map.prototype.keys;
Map.prototype.set;
Map.prototype.size;
Map.prototype.values;


/** @constructor */
function WeakMap(opt_iterable) {}
WeakMap.prototype.clear;
WeakMap.prototype.delete;
WeakMap.prototype.get;
WeakMap.prototype.has;
WeakMap.prototype.set;

/** @constructor */
function Set(opt_iterable) {}
Set.prototype.add;
Set.prototype.clear;
Set.prototype.delete;
Set.prototype.entries;
Set.prototype.forEach;
Set.prototype.has;
Set.prototype.keys;
Set.prototype.size;
Set.prototype.values;

/** @constructor */
function WeakSet(opt_iterable) {}
WeakSet.prototype.add;
WeakSet.prototype.clear;
WeakSet.prototype.delete;
WeakSet.prototype.has;


/**
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 * @see http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.is
 */
Object.is;


/**
 * @param {Object} target
 * @param {Object} source
 * @return {Object}
 * @see http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign
 */
Object.assign;

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.log10 = function(value) {};

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.log2 = function(value) {};

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.log1p = function(value) {};

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.expm1 = function(value) {};

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.cosh = function(value) {};

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.sinh = function(value) {};

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.tanh = function(value) {};

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.acosh = function(value) {};

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.asinh = function(value) {};

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.atanh = function(value) {};

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.trunc = function(value) {};

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.sign = function(value) {};

/**
 * @param {number} value
 * @return {number}
 * @nosideeffects
 */
Math.cbrt = function(value) {};

/**
 * @param {number} value1
 * @param {...number} var_args
 * @return {number}
 * @nosideeffects
 * @see http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.hypot
 */
Math.hypot = function(value1, var_args) {};


/** @const {number} */
Number.EPSILON;

/** @const {number} */
Number.MAX_SAFE_INTEGER;

/**
 * Parse an integer. Use of {@code parseInt} without {@code base} is strictly
 * banned in Google. If you really want to parse octal or hex based on the
 * leader, then pass {@code undefined} as the base.
 *
 * @param {string} string
 * @param {number|undefined} radix
 * @return {number}
 * @nosideeffects
 * @see http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.parseint
 */
Number.parseInt = function(string, radix) {};

/**
 * @param {string} string
 * @return {number}
 * @nosideeffects
 * @see http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.parsefloat
 */
Number.parseFloat = function(string) {};

/**
 * @param {number} value
 * @return {boolean}
 * @nosideeffects
 * @see http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isnan
 */
Number.isNaN = function(value) {};

/**
 * @param {number} value
 * @return {boolean}
 * @nosideeffects
 * @see http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isfinite
 */
Number.isFinite = function(value) {};

/**
 * @param {number} value
 * @return {boolean}
 * @nosideeffects
 * @see http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isinteger
 */
Number.isInteger = function(value) {};

/**
 * @param {number} value
 * @return {boolean}
 * @nosideeffects
 * @see http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.issafeinteger
 */
Number.isSafeInteger = function(value) {};

/**
 * @param {number} count
 * @return {string}
 * @nosideeffects
 * @see http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.repeat
 */
String.prototype.repeat = function(count) {};

/**
 * @param {string} searchString
 * @param {number=} opt_position
 * @return {boolean}
 * @nosideeffects
 * @see http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.startswith
 */
String.prototype.startsWith = function(searchString, opt_position) {};

/**
 * @param {string} searchString
 * @param {number=} opt_position
 * @return {boolean}
 * @nosideeffects
 * @see http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.endswith
 */
String.prototype.endsWith = function(searchString, opt_position) {};

/**
 * @param {string} searchString
 * @param {number=} opt_position
 * @return {boolean}
 * @nosideeffects
 * @see http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.contains
 */
String.prototype.contains = function(searchString, opt_position) {};
/*
 * Copyright 2011 The Closure Compiler Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Externs for jQuery 1.9.1
 *
 * Note that some functions use different return types depending on the number
 * of parameters passed in. In these cases, you may need to annotate the type
 * of the result in your code, so the JSCompiler understands which type you're
 * expecting. For example:
 *    <code>var elt = /** @type {Element} * / (foo.get(0));</code>
 *
 * @see http://api.jquery.com/
 * @externs
 */

/**
 * @typedef {(Window|Document|Element|Array.<Element>|string|jQuery|
 *     NodeList)}
 */
var jQuerySelector;

/** @typedef {function(...)|Array.<function(...)>} */
var jQueryCallback;

/**
 * @constructor
 * @param {(jQuerySelector|Element|Object|Array.<Element>|jQuery|string|
 *     function())=} arg1
 * @param {(Element|jQuery|Document|
 *     Object.<string, (string|function(!jQuery.event=))>)=} arg2
 * @return {!jQuery}
 */
function jQuery(arg1, arg2) {}

/**
 * @constructor
 * @extends {jQuery}
 * @param {(jQuerySelector|Element|Object|Array.<Element>|jQuery|string|
 *     function())=} arg1
 * @param {(Element|jQuery|Document|
 *     Object.<string, (string|function(!jQuery.event=))>)=} arg2
 * @return {!jQuery}
 */
function $(arg1, arg2) {}

/**
 * @param {(jQuerySelector|Array.<Element>|string|jQuery)} arg1
 * @param {Element=} context
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.add = function(arg1, context) {};

/**
 * @param {(jQuerySelector|Array.<Element>|string|jQuery)} arg1
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.addBack = function(arg1) {};

/**
 * @param {(string|function(number,String))} arg1
 * @return {!jQuery}
 */
jQuery.prototype.addClass = function(arg1) {};

/**
 * @param {(string|Element|jQuery|function(number))} arg1
 * @param {(string|Element|Array.<Element>|jQuery)=} content
 * @return {!jQuery}
 */
jQuery.prototype.after = function(arg1, content) {};

/**
 * @param {(string|Object.<string,*>)} arg1
 * @param {Object.<string,*>=} settings
 * @return {jQuery.jqXHR}
 */
jQuery.ajax = function(arg1, settings) {};

/**
 * @param {(string|Object.<string,*>)} arg1
 * @param {Object.<string,*>=} settings
 * @return {jQuery.jqXHR}
 */
$.ajax = function(arg1, settings) {};

/**
 * @param {function(!jQuery.event,XMLHttpRequest,Object.<string, *>)} handler
 * @return {!jQuery}
 */
jQuery.prototype.ajaxComplete = function(handler) {};

/**
 * @param {function(!jQuery.event,jQuery.jqXHR,Object.<string, *>,*)} handler
 * @return {!jQuery}
 */
jQuery.prototype.ajaxError = function(handler) {};

/**
 * @param {(string|
 *     function(Object.<string,*>,Object.<string, *>,jQuery.jqXHR))} dataTypes
 * @param {function(Object.<string,*>,Object.<string, *>,jQuery.jqXHR)=} handler
 */
jQuery.ajaxPrefilter = function(dataTypes, handler) {};

/**
 * @param {(string|
 *     function(Object.<string,*>,Object.<string, *>,jQuery.jqXHR))} dataTypes
 * @param {function(Object.<string,*>,Object.<string, *>,jQuery.jqXHR)=} handler
 */
$.ajaxPrefilter = function(dataTypes, handler) {};

/**
 * @param {function(!jQuery.event,jQuery.jqXHR,Object.<string, *>)} handler
 * @return {!jQuery}
 */
jQuery.prototype.ajaxSend = function(handler) {};

/** @const */
jQuery.ajaxSettings = {};

/** @const */
$.ajaxSettings = {};

/** @type {Object.<string, string>} */
jQuery.ajaxSettings.accepts = {};

/** @type {Object.<string, string>} */
$.ajaxSettings.accepts = {};

/** @type {boolean} */
jQuery.ajaxSettings.async;

/** @type {boolean} */
$.ajaxSettings.async;

/** @type {Object.<string, RegExp>} */
jQuery.ajaxSettings.contents = {};

/** @type {Object.<string, RegExp>} */
$.ajaxSettings.contents = {};

/** @type {string} */
jQuery.ajaxSettings.contentType;

/** @type {string} */
$.ajaxSettings.contentType;

/** @type {Object.<string, *>} */
jQuery.ajaxSettings.converters = {};

/** @type {Object.<string, *>} */
$.ajaxSettings.converters = {};

/** @type {Object.<string, boolean>} */
jQuery.ajaxSettings.flatOptions = {};

/** @type {Object.<string, boolean>} */
$.ajaxSettings.flatOptions = {};

/** @type {boolean} */
jQuery.ajaxSettings.global;

/** @type {boolean} */
$.ajaxSettings.global;

/** @type {boolean} */
jQuery.ajaxSettings.isLocal;

/** @type {boolean} */
$.ajaxSettings.isLocal;

/** @type {boolean} */
jQuery.ajaxSettings.processData;

/** @type {boolean} */
$.ajaxSettings.processData;

/** @type {Object.<string, string>} */
jQuery.ajaxSettings.responseFields = {};

/** @type {Object.<string, string>} */
$.ajaxSettings.responseFields = {};

/** @type {boolean} */
jQuery.ajaxSettings.traditional;

/** @type {boolean} */
$.ajaxSettings.traditional;

/** @type {string} */
jQuery.ajaxSettings.type;

/** @type {string} */
$.ajaxSettings.type;

/** @type {string} */
jQuery.ajaxSettings.url;

/** @type {string} */
$.ajaxSettings.url;

/** @return {XMLHttpRequest|ActiveXObject} */
jQuery.ajaxSettings.xhr = function() {};

/** @return {XMLHttpRequest|ActiveXObject} */
$.ajaxSettings.xhr = function() {};

/** @param {Object.<string,*>} options */
jQuery.ajaxSetup = function(options) {};

/** @param {Object.<string,*>} options */
$.ajaxSetup = function(options) {};

/**
 * @param {function()} handler
 * @return {!jQuery}
 */
jQuery.prototype.ajaxStart = function(handler) {};

/**
 * @param {function()} handler
 * @return {!jQuery}
 */
jQuery.prototype.ajaxStop = function(handler) {};

/**
 * @param {function(!jQuery.event,XMLHttpRequest,Object.<string, *>)} handler
 * @return {!jQuery}
 */
jQuery.prototype.ajaxSuccess = function(handler) {};

/**
 * @deprecated Please use .addBack(selector) instead.
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.andSelf = function() {};

/**
 * @param {Object.<string,*>} properties
 * @param {(string|number|function()|Object.<string,*>)=} arg2
 * @param {(string|function())=} easing
 * @param {function()=} complete
 * @return {!jQuery}
 */
jQuery.prototype.animate = function(properties, arg2, easing, complete) {};

/**
 * @param {(string|Element|jQuery|function(number,string))} arg1
 * @param {(string|Element|Array.<Element>|jQuery)=} content
 * @return {!jQuery}
 */
jQuery.prototype.append = function(arg1, content) {};

/**
 * @param {(jQuerySelector|Element|jQuery)} target
 * @return {!jQuery}
 */
jQuery.prototype.appendTo = function(target) {};

/**
 * @param {(string|Object.<string,*>)} arg1
 * @param {(string|number|boolean|function(number,string))=} arg2
 * @return {(string|!jQuery)}
 */
jQuery.prototype.attr = function(arg1, arg2) {};

/**
 * @param {(string|Element|jQuery|function())} arg1
 * @param {(string|Element|Array.<Element>|jQuery)=} content
 * @return {!jQuery}
 */
jQuery.prototype.before = function(arg1, content) {};

/**
 * @param {(string|Object.<string, function(!jQuery.event=)>)} arg1
 * @param {(Object.<string, *>|function(!jQuery.event=)|boolean)=} eventData
 * @param {(function(!jQuery.event=)|boolean)=} arg3
 * @return {!jQuery}
 */
jQuery.prototype.bind = function(arg1, eventData, arg3) {};

/**
 * @param {(function(!jQuery.event=)|Object.<string, *>)=} arg1
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.blur = function(arg1, handler) {};

/** @type {boolean} */
jQuery.boxModel;

/** @type {boolean} */
$.boxModel;

/**
 * @constructor
 * @private
 */
jQuery.callbacks = function () {};

/**
 * @param {string=} flags
 * @return {jQuery.callbacks}
 */
jQuery.Callbacks = function (flags) {};

/** @param {function()} callbacks */
jQuery.callbacks.prototype.add = function(callbacks) {};

/** @return {undefined} */
jQuery.callbacks.prototype.disable = function() {};

/** @return {undefined} */
jQuery.callbacks.prototype.empty = function() {};

/** @param {...*} var_args */
jQuery.callbacks.prototype.fire = function(var_args) {};

/** @return {boolean} */
jQuery.callbacks.prototype.fired = function() {};

/** @param {...*} var_args */
jQuery.callbacks.prototype.fireWith = function(var_args) {};

/**
 * @param {function()} callback
 * @return {boolean}
 * @nosideeffects
 */
jQuery.callbacks.prototype.has = function(callback) {};

/** @return {undefined} */
jQuery.callbacks.prototype.lock = function() {};

/** @return {boolean} */
jQuery.callbacks.prototype.locked = function() {};

/** @param {function()} callbacks */
jQuery.callbacks.prototype.remove = function(callbacks) {};

/**
 * @param {(function(!jQuery.event=)|Object.<string, *>)=} arg1
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.change = function(arg1, handler) {};

/**
 * @param {jQuerySelector=} selector
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.children = function(selector) {};

/**
 * @param {string=} queueName
 * @return {!jQuery}
 */
jQuery.prototype.clearQueue = function(queueName) {};

/**
 * @param {(function(!jQuery.event=)|Object.<string, *>)=} arg1
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.click = function(arg1, handler) {};

/**
 * @param {boolean=} withDataAndEvents
 * @param {boolean=} deepWithDataAndEvents
 * @return {!jQuery}
 * @suppress {checkTypes} see issue 583
 */
jQuery.prototype.clone = function(withDataAndEvents, deepWithDataAndEvents) {};

/**
 * @param {(jQuerySelector|jQuery|Element|string|Array.<string>)} arg1
 * @param {Element=} context
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.closest = function(arg1, context) {};

/**
 * @param {Element} container
 * @param {Element} contained
 * @return {boolean}
 */
jQuery.contains = function(container, contained) {};

/**
 * @param {Element} container
 * @param {Element} contained
 * @return {boolean}
 */
$.contains = function(container, contained) {};

/**
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.contents = function() {};

/** @type {Element} */
jQuery.prototype.context;

/**
 * @param {(string|Object.<string,*>)} arg1
 * @param {(string|number|function(number,*))=} arg2
 * @return {(string|!jQuery)}
 */
jQuery.prototype.css = function(arg1, arg2) {};

/** @type {Object.<string, *>} */
jQuery.cssHooks;

/** @type {Object.<string, *>} */
$.cssHooks;

/**
 * @param {Element} elem
 * @param {string=} key
 * @param {*=} value
 * @return {*}
 */
jQuery.data = function(elem, key, value) {};

/**
 * @param {(string|Object.<string, *>)=} arg1
 * @param {*=} value
 * @return {*}
 */
jQuery.prototype.data = function(arg1, value) {};

/**
 * @param {Element} elem
 * @param {string=} key
 * @param {*=} value
 * @return {*}
 */
$.data = function(elem, key, value) {};

/**
 * @param {(function(!jQuery.event=)|Object.<string, *>)=} arg1
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.dblclick = function(arg1, handler) {};

/**
 * @constructor
 * @implements {jQuery.Promise}
 * @param {function()=} opt_fn
 * @see http://api.jquery.com/category/deferred-object/
 */
jQuery.deferred = function(opt_fn) {};

/**
 * @constructor
 * @extends {jQuery.deferred}
 * @param {function()=} opt_fn
 * @return {jQuery.Deferred}
 */
jQuery.Deferred = function(opt_fn) {};

/**
 * @constructor
 * @extends {jQuery.deferred}
 * @param {function()=} opt_fn
 * @see http://api.jquery.com/category/deferred-object/
 */
$.deferred = function(opt_fn) {};

/**
 * @constructor
 * @extends {jQuery.deferred}
 * @param {function()=} opt_fn
 * @return {jQuery.deferred}
 */
$.Deferred = function(opt_fn) {};

/**
 * @override
 * @param {jQueryCallback} alwaysCallbacks
 * @param {jQueryCallback=} alwaysCallbacks2
 * @return {jQuery.deferred}
 */
jQuery.deferred.prototype.always
    = function(alwaysCallbacks, alwaysCallbacks2) {};

/**
 * @override
 * @param {jQueryCallback} doneCallbacks
 * @param {jQueryCallback=} doneCallbacks2
 * @return {jQuery.deferred}
 */
jQuery.deferred.prototype.done = function(doneCallbacks, doneCallbacks2) {};

/**
 * @override
 * @param {jQueryCallback} failCallbacks
 * @param {jQueryCallback=} failCallbacks2
 * @return {jQuery.deferred}
 */
jQuery.deferred.prototype.fail = function(failCallbacks, failCallbacks2) {};

/**
 * @param {...*} var_args
 * @return {jQuery.deferred}
 */
jQuery.deferred.prototype.notify = function(var_args) {};

/**
 * @param {Object} context
 * @param {...*} var_args
 * @return {jQuery.deferred}
 */
jQuery.deferred.prototype.notifyWith = function(context, var_args) {};

/**
 * @override
 * @param {function()=} doneFilter
 * @param {function()=} failFilter
 * @param {function()=} progressFilter
 * @return {jQuery.Promise}
 */
jQuery.deferred.prototype.pipe
    = function(doneFilter, failFilter, progressFilter) {};

/**
 * @param {function()} progressCallbacks
 * @return {jQuery.deferred}
 */
jQuery.deferred.prototype.progress = function(progressCallbacks) {};

/**
 * @param {Object=} target
 * @return {jQuery.Promise}
 */
jQuery.deferred.prototype.promise = function(target) {};

/**
 * @param {...*} var_args
 * @return {jQuery.deferred}
 */
jQuery.deferred.prototype.reject = function(var_args) {};

/**
 * @param {Object} context
 * @param {Array.<*>=} args
 * @return {jQuery.deferred}
 */
jQuery.deferred.prototype.rejectWith = function(context, args) {};

/**
 * @param {...*} var_args
 * @return {jQuery.deferred}
 */
jQuery.deferred.prototype.resolve = function(var_args) {};

/**
 * @param {Object} context
 * @param {Array.<*>=} args
 * @return {jQuery.deferred}
 */
jQuery.deferred.prototype.resolveWith = function(context, args) {};

/** @return {string} */
jQuery.deferred.prototype.state = function() {};

/**
 * @override
 * @param {jQueryCallback} doneCallbacks
 * @param {jQueryCallback=} failCallbacks
 * @param {jQueryCallback=} progressCallbacks
 * @return {jQuery.deferred}
 */
jQuery.deferred.prototype.then
    = function(doneCallbacks, failCallbacks, progressCallbacks) {};

/**
 * @param {number} duration
 * @param {string=} queueName
 * @return {!jQuery}
 */
jQuery.prototype.delay = function(duration, queueName) {};

/**
 * @param {string} selector
 * @param {(string|Object.<string,*>)} arg2
 * @param {(function(!jQuery.event=)|Object.<string, *>)=} arg3
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.delegate = function(selector, arg2, arg3, handler) {};

/**
 * @param {Element} elem
 * @param {string=} queueName
 */
jQuery.dequeue = function(elem, queueName) {};

/**
 * @param {string=} queueName
 * @return {!jQuery}
 */
jQuery.prototype.dequeue = function(queueName) {};

/**
 * @param {Element} elem
 * @param {string=} queueName
 */
$.dequeue = function(elem, queueName) {};

/**
 * @param {jQuerySelector=} selector
 * @return {!jQuery}
 */
jQuery.prototype.detach = function(selector) {};

/**
 * @param {Object} collection
 * @param {function(number,?)} callback
 * @return {Object}
 */
jQuery.each = function(collection, callback) {};

/**
 * @param {function(number,Element)} fnc
 * @return {!jQuery}
 */
jQuery.prototype.each = function(fnc) {};

/**
 * @param {Object} collection
 * @param {function(number,?)} callback
 * @return {Object}
 */
$.each = function(collection, callback) {};

/** @return {!jQuery} */
jQuery.prototype.empty = function() {};

/**
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.end = function() {};

/**
 * @param {number} arg1
 * @return {!jQuery}
 */
jQuery.prototype.eq = function(arg1) {};

/** @param {string} message */
jQuery.error = function(message) {};

/**
 * @deprecated
 * @param {(function(!jQuery.event=)|Object.<string, *>)} arg1
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.error = function(arg1, handler) {};

/** @param {string} message */
$.error = function(message) {};

/**
 * @constructor
 * @param {string} eventType
 */
jQuery.event = function(eventType) {};

/**
 * @constructor
 * @extends {jQuery.event}
 * @param {string} eventType
 * @param {Object=} properties
 * @return {jQuery.Event}
 */
jQuery.Event = function(eventType, properties) {};

/**
 * @constructor
 * @extends {jQuery.event}
 * @param {string} eventType
 */
$.event = function(eventType) {};

/**
 * @constructor
 * @extends {jQuery.event}
 * @param {string} eventType
 * @param {Object=} properties
 * @return {$.Event}
 */
$.Event = function(eventType, properties) {};

/** @type {Element} */
jQuery.event.prototype.currentTarget;

/** @type {Object.<string, *>} */
jQuery.event.prototype.data;

/** @type {Element} */
jQuery.event.prototype.delegateTarget;

/**
 * @return {boolean}
 * @nosideeffects
 */
jQuery.event.prototype.isDefaultPrevented = function() {};

/**
 * @return {boolean}
 * @nosideeffects
 */
jQuery.event.prototype.isImmediatePropagationStopped = function() {};

/**
 * @return {boolean}
 * @nosideeffects
 */
jQuery.event.prototype.isPropagationStopped = function() {};

/** @type {string} */
jQuery.event.prototype.namespace;

/** @type {Event} */
jQuery.event.prototype.originalEvent;

/** @type {number} */
jQuery.event.prototype.pageX;

/** @type {number} */
jQuery.event.prototype.pageY;

/** @return {undefined} */
jQuery.event.prototype.preventDefault = function() {};

/** @type {Object.<string, *>} */
jQuery.event.prototype.props;

/** @type {Element} */
jQuery.event.prototype.relatedTarget;

/** @type {*} */
jQuery.event.prototype.result;

/** @return {undefined} */
jQuery.event.prototype.stopImmediatePropagation = function() {};

/** @return {undefined} */
jQuery.event.prototype.stopPropagation = function() {};

/** @type {Element} */
jQuery.event.prototype.target;

/** @type {number} */
jQuery.event.prototype.timeStamp;

/** @type {string} */
jQuery.event.prototype.type;

/** @type {number} */
jQuery.event.prototype.which;

/**
 * @param {(Object|boolean)} arg1
 * @param {...*} var_args
 * @return {Object}
 */
jQuery.extend = function(arg1, var_args) {};

/**
 * @param {(Object|boolean)} arg1
 * @param {...*} var_args
 * @return {Object}
 */
jQuery.prototype.extend = function(arg1, var_args) {};

/**
 * @param {(Object|boolean)} arg1
 * @param {...*} var_args
 * @return {Object}
 */
$.extend = function(arg1, var_args) {};

/**
 * @param {(string|number|function())=} duration
 * @param {(function()|string)=} arg2
 * @param {function()=} callback
 * @return {!jQuery}
 */
jQuery.prototype.fadeIn = function(duration, arg2, callback) {};

/**
 * @param {(string|number|function())=} duration
 * @param {(function()|string)=} arg2
 * @param {function()=} callback
 * @return {!jQuery}
 */
jQuery.prototype.fadeOut = function(duration, arg2, callback) {};

/**
 * @param {(string|number)} duration
 * @param {number} opacity
 * @param {(function()|string)=} arg3
 * @param {function()=} callback
 * @return {!jQuery}
 */
jQuery.prototype.fadeTo = function(duration, opacity, arg3, callback) {};

/**
 * @param {(string|number|function())=} duration
 * @param {(string|function())=} easing
 * @param {function()=} callback
 * @return {!jQuery}
 */
jQuery.prototype.fadeToggle = function(duration, easing, callback) {};

/**
 * @param {(jQuerySelector|function(number)|Element|jQuery)} arg1
 * @return {!jQuery}
 */
jQuery.prototype.filter = function(arg1) {};

/**
 * @param {(jQuerySelector|jQuery|Element)} arg1
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.find = function(arg1) {};

/** @return {!jQuery} */
jQuery.prototype.first = function() {};

/** @see http://docs.jquery.com/Plugins/Authoring */
jQuery.fn;

/** @see http://docs.jquery.com/Plugins/Authoring */
$.fn;

/**
 * @param {(function(!jQuery.event=)|Object.<string, *>)=} arg1
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.focus = function(arg1, handler) {};

/**
 * @param {(function(!jQuery.event=)|Object.<string, *>)} arg1
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.focusin = function(arg1, handler) {};

/**
 * @param {(function(!jQuery.event=)|Object.<string, *>)} arg1
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.focusout = function(arg1, handler) {};

/** @const */
jQuery.fx = {};

/** @const */
$.fx = {};

/** @type {number} */
jQuery.fx.interval;

/** @type {number} */
$.fx.interval;

/** @type {boolean} */
jQuery.fx.off;

/** @type {boolean} */
$.fx.off;

/**
 * @param {string} url
 * @param {(Object.<string,*>|string|
 *     function(string,string,jQuery.jqXHR))=} data
 * @param {(function(string,string,jQuery.jqXHR)|string)=} success
 * @param {string=} dataType
 * @return {jQuery.jqXHR}
 */
jQuery.get = function(url, data, success, dataType) {};

/**
 * @param {number=} index
 * @return {(Element|Array.<Element>)}
 * @nosideeffects
 */
jQuery.prototype.get = function(index) {};

/**
 * @param {string} url
 * @param {(Object.<string,*>|string|
 *     function(string,string,jQuery.jqXHR))=} data
 * @param {(function(string,string,jQuery.jqXHR)|string)=} success
 * @param {string=} dataType
 * @return {jQuery.jqXHR}
 */
$.get = function(url, data, success, dataType) {};

/**
 * @param {string} url
 * @param {(Object.<string,*>|function(string,string,jQuery.jqXHR))=} data
 * @param {function(string,string,jQuery.jqXHR)=} success
 * @return {jQuery.jqXHR}
 */
jQuery.getJSON = function(url, data, success) {};

/**
 * @param {string} url
 * @param {(Object.<string,*>|function(string,string,jQuery.jqXHR))=} data
 * @param {function(string,string,jQuery.jqXHR)=} success
 * @return {jQuery.jqXHR}
 */
$.getJSON = function(url, data, success) {};

/**
 * @param {string} url
 * @param {function(Node,string,jQuery.jqXHR)=} success
 * @return {jQuery.jqXHR}
 */
jQuery.getScript = function(url, success) {};

/**
 * @param {string} url
 * @param {function(Node,string,jQuery.jqXHR)=} success
 * @return {jQuery.jqXHR}
 */
$.getScript = function(url, success) {};

/** @param {string} code */
jQuery.globalEval = function(code) {};

/** @param {string} code */
$.globalEval = function(code) {};

/**
 * @param {Array.<*>} arr
 * @param {function(*,number)} fnc
 * @param {boolean=} invert
 * @return {Array.<*>}
 */
jQuery.grep = function(arr, fnc, invert) {};

/**
 * @param {Array.<*>} arr
 * @param {function(*,number)} fnc
 * @param {boolean=} invert
 * @return {Array.<*>}
 */
$.grep = function(arr, fnc, invert) {};

/**
 * @param {(string|Element)} arg1
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.has = function(arg1) {};

/**
 * @param {string} className
 * @return {boolean}
 * @nosideeffects
 */
jQuery.prototype.hasClass = function(className) {};

/**
 * @param {Element} elem
 * @return {boolean}
 * @nosideeffects
 */
jQuery.hasData = function(elem) {};

/**
 * @param {Element} elem
 * @return {boolean}
 * @nosideeffects
 */
$.hasData = function(elem) {};

/**
 * @param {(string|number|function(number,number))=} arg1
 * @return {(number|!jQuery)}
 */
jQuery.prototype.height = function(arg1) {};

/**
 * @param {(string|number|function())=} duration
 * @param {(function()|string)=} arg2
 * @param {function()=} callback
 * @return {!jQuery}
 */
jQuery.prototype.hide = function(duration, arg2, callback) {};

/** @param {boolean} hold */
jQuery.holdReady = function(hold) {};

/** @param {boolean} hold */
$.holdReady = function(hold) {};

/**
 * @param {function(!jQuery.event=)} arg1
 * @param {function(!jQuery.event=)=} handlerOut
 * @return {!jQuery}
 */
jQuery.prototype.hover = function(arg1, handlerOut) {};

/**
 * @param {(string|function(number,string))=} arg1
 * @return {(string|!jQuery)}
 */
jQuery.prototype.html = function(arg1) {};

/**
 * @param {*} value
 * @param {Array.<*>} arr
 * @param {number=} fromIndex
 * @return {number}
 * @nosideeffects
 */
jQuery.inArray = function(value, arr, fromIndex) {};

/**
 * @param {*} value
 * @param {Array.<*>} arr
 * @param {number=} fromIndex
 * @return {number}
 * @nosideeffects
 */
$.inArray = function(value, arr, fromIndex) {};

/**
 * @param {(jQuerySelector|Element|jQuery)=} arg1
 * @return {number}
 */
jQuery.prototype.index = function(arg1) {};

/**
 * @return {number}
 * @nosideeffects
 */
jQuery.prototype.innerHeight = function() {};

/**
 * @return {number}
 * @nosideeffects
 */
jQuery.prototype.innerWidth = function() {};

/**
 * @param {(jQuerySelector|Element|jQuery)} target
 * @return {!jQuery}
 */
jQuery.prototype.insertAfter = function(target) {};

/**
 * @param {(jQuerySelector|Element|jQuery)} target
 * @return {!jQuery}
 */
jQuery.prototype.insertBefore = function(target) {};

/**
 * @param {(jQuerySelector|function(number)|jQuery|Element)} arg1
 * @return {boolean}
 */
jQuery.prototype.is = function(arg1) {};

/**
 * @param {*} obj
 * @return {boolean}
 * @nosideeffects
 */
jQuery.isArray = function(obj) {};

/**
 * @param {*} obj
 * @return {boolean}
 * @nosideeffects
 */
$.isArray = function(obj) {};

/**
 * @param {Object} obj
 * @return {boolean}
 * @nosideeffects
 */
jQuery.isEmptyObject = function(obj) {};

/**
 * @param {Object} obj
 * @return {boolean}
 * @nosideeffects
 */
$.isEmptyObject = function(obj) {};

/**
 * @param {*} obj
 * @return {boolean}
 * @nosideeffects
 */
jQuery.isFunction = function(obj) {};

/**
 * @param {*} obj
 * @return {boolean}
 * @nosideeffects
 */
$.isFunction = function(obj) {};

/**
 * @param {*} value
 * @return {boolean}
 * @nosideeffects
 */
jQuery.isNumeric = function(value) {};

/**
 * @param {*} value
 * @return {boolean}
 * @nosideeffects
 */
$.isNumeric = function(value) {};

/**
 * @param {Object} obj
 * @return {boolean}
 * @nosideeffects
 */
jQuery.isPlainObject = function(obj) {};

/**
 * @param {Object} obj
 * @return {boolean}
 * @nosideeffects
 */
$.isPlainObject = function(obj) {};

/**
 * @param {*} obj
 * @return {boolean}
 * @nosideeffects
 */
jQuery.isWindow = function(obj) {};

/**
 * @param {*} obj
 * @return {boolean}
 * @nosideeffects
 */
$.isWindow = function(obj) {};

/**
 * @param {Element} node
 * @return {boolean}
 * @nosideeffects
 */
jQuery.isXMLDoc = function(node) {};

/**
 * @param {Element} node
 * @return {boolean}
 * @nosideeffects
 */
$.isXMLDoc = function(node) {};

/** @type {string} */
jQuery.prototype.jquery;

/**
 * @constructor
 * @extends {XMLHttpRequest}
 * @implements {jQuery.Promise}
 * @private
 * @see http://api.jquery.com/jQuery.ajax/#jqXHR
 */
jQuery.jqXHR = function () {};

/**
 * @override
 * @param {jQueryCallback} alwaysCallbacks
 * @param {jQueryCallback=} alwaysCallbacks2
 * @return {jQuery.jqXHR}
 */
jQuery.jqXHR.prototype.always =
    function(alwaysCallbacks, alwaysCallbacks2) {};

/**
 * @deprecated
 * @param {function()} callback
 * @return {jQuery.jqXHR}
*/
jQuery.jqXHR.prototype.complete = function (callback) {};

/**
 * @override
 * @param {jQueryCallback} doneCallbacks
 * @return {jQuery.jqXHR}
 */
jQuery.jqXHR.prototype.done = function(doneCallbacks) {};

/**
 * @deprecated
 * @param {function()} callback
 * @return {jQuery.jqXHR}
*/
jQuery.jqXHR.prototype.error = function (callback) {};

/**
 * @override
 * @param {jQueryCallback} failCallbacks
 * @return {jQuery.jqXHR}
 */
jQuery.jqXHR.prototype.fail = function(failCallbacks) {};

/**
 * @deprecated
 * @override
 */
jQuery.jqXHR.prototype.onreadystatechange = function (callback) {};

/**
 * @override
 * @param {function()=} doneFilter
 * @param {function()=} failFilter
 * @param {function()=} progressFilter
 * @return {jQuery.jqXHR}
 */
jQuery.jqXHR.prototype.pipe =
    function(doneFilter, failFilter, progressFilter) {};

/**
 * @deprecated
 * @param {function()} callback
 * @return {jQuery.jqXHR}
*/
jQuery.jqXHR.prototype.success = function (callback) {};

/**
 * @override
 * @param {jQueryCallback} doneCallbacks
 * @param {jQueryCallback=} failCallbacks
 * @param {jQueryCallback=} progressCallbacks
 * @return {jQuery.jqXHR}
 */
jQuery.jqXHR.prototype.then =
    function(doneCallbacks, failCallbacks, progressCallbacks) {};

/**
 * @param {(function(!jQuery.event=)|Object.<string, *>)=} arg1
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.keydown = function(arg1, handler) {};

/**
 * @param {(function(!jQuery.event=)|Object.<string, *>)=} arg1
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.keypress = function(arg1, handler) {};

/**
 * @param {(function(!jQuery.event=)|Object.<string, *>)=} arg1
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.keyup = function(arg1, handler) {};

/** @return {!jQuery} */
jQuery.prototype.last = function() {};

/** @type {number} */
jQuery.prototype.length;

/**
 * @deprecated
 * @param {(function(!jQuery.event=)|Object.<string, *>|string)} arg1
 * @param {(function(!jQuery.event=)|Object.<string,*>|string)=} arg2
 * @param {function(string,string,XMLHttpRequest)=} complete
 * @return {!jQuery}
 */
jQuery.prototype.load = function(arg1, arg2, complete) {};

/**
 * @param {*} obj
 * @return {Array.<*>}
 */
jQuery.makeArray = function(obj) {};

/**
 * @param {*} obj
 * @return {Array.<*>}
 */
$.makeArray = function(obj) {};

/**
 * @param {(Array.<*>|Object.<string, *>)} arg1
 * @param {(function(*,number)|function(*,(string|number)))} callback
 * @return {Array.<*>}
 */
jQuery.map = function(arg1, callback) {};

/**
 * @param {function(number,Element)} callback
 * @return {!jQuery}
 */
jQuery.prototype.map = function(callback) {};

/**
 * @param {(Array.<*>|Object.<string, *>)} arg1
 * @param {(function(*,number)|function(*,(string|number)))} callback
 * @return {Array.<*>}
 */
$.map = function(arg1, callback) {};

/**
 * @param {Array.<*>} first
 * @param {Array.<*>} second
 * @return {Array.<*>}
 */
jQuery.merge = function(first, second) {};

/**
 * @param {Array.<*>} first
 * @param {Array.<*>} second
 * @return {Array.<*>}
 */
$.merge = function(first, second) {};

/**
 * @param {(function(!jQuery.event=)|Object.<string, *>)=} arg1
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.mousedown = function(arg1, handler) {};

/**
 * @param {(function(!jQuery.event=)|Object.<string, *>)=} arg1
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.mouseenter = function(arg1, handler) {};

/**
 * @param {(function(!jQuery.event=)|Object.<string, *>)=} arg1
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.mouseleave = function(arg1, handler) {};

/**
 * @param {(function(!jQuery.event=)|Object.<string, *>)=} arg1
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.mousemove = function(arg1, handler) {};

/**
 * @param {(function(!jQuery.event=)|Object.<string, *>)=} arg1
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.mouseout = function(arg1, handler) {};

/**
 * @param {(function(!jQuery.event=)|Object.<string, *>)=} arg1
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.mouseover = function(arg1, handler) {};

/**
 * @param {(function(!jQuery.event=)|Object.<string, *>)=} arg1
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.mouseup = function(arg1, handler) {};

/**
 * @param {jQuerySelector=} selector
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.next = function(selector) {};

/**
 * @param {string=} selector
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.nextAll = function(selector) {};

/**
 * @param {(jQuerySelector|Element)=} arg1
 * @param {jQuerySelector=} filter
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.nextUntil = function(arg1, filter) {};

/**
 * @param {boolean=} removeAll
 * @return {Object}
 */
jQuery.noConflict = function(removeAll) {};

/**
 * @param {boolean=} removeAll
 * @return {Object}
 */
$.noConflict = function(removeAll) {};

/**
 * @return {function()}
 * @nosideeffects
 */
jQuery.noop = function() {};

/**
 * @return {function()}
 * @nosideeffects
 */
$.noop = function() {};

/**
 * @param {(jQuerySelector|Array.<Element>|function(number)|jQuery)} arg1
 * @return {!jQuery}
 */
jQuery.prototype.not = function(arg1) {};

/**
 * @return {number}
 * @nosideeffects
 */
jQuery.now = function() {};

/**
 * @return {number}
 * @nosideeffects
 */
$.now = function() {};

/**
 * @param {(string|Object.<string,*>)=} arg1
 * @param {(string|function(!jQuery.event=))=} selector
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.off = function(arg1, selector, handler) {};

/**
 * @param {({left:number,top:number}|
 *     function(number,{top:number,left:number}))=} arg1
 * @return {({left:number,top:number}|!jQuery)}
 */
jQuery.prototype.offset = function(arg1) {};

/**
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.offsetParent = function() {};

/**
 * @param {(string|Object.<string,*>)} arg1
 * @param {*=} selector
 * @param {*=} data
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.on = function(arg1, selector, data, handler) {};

/**
 * @param {(string|Object.<string,*>)} arg1
 * @param {*=} arg2
 * @param {*=} arg3
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.one = function(arg1, arg2, arg3, handler) {};

/**
 * @param {boolean=} includeMargin
 * @return {number}
 * @nosideeffects
 */
jQuery.prototype.outerHeight = function(includeMargin) {};

/**
 * @param {boolean=} includeMargin
 * @return {number}
 * @nosideeffects
 */
jQuery.prototype.outerWidth = function(includeMargin) {};

/**
 * @param {(Object.<string, *>|Array.<Object.<string, *>>)} obj
 * @param {boolean=} traditional
 * @return {string}
 */
jQuery.param = function(obj, traditional) {};

/**
 * @param {(Object.<string, *>|Array.<Object.<string, *>>)} obj
 * @param {boolean=} traditional
 * @return {string}
 */
$.param = function(obj, traditional) {};

/**
 * @param {jQuerySelector=} selector
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.parent = function(selector) {};

/**
 * @param {jQuerySelector=} selector
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.parents = function(selector) {};

/**
 * @param {(jQuerySelector|Element)=} arg1
 * @param {jQuerySelector=} filter
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.parentsUntil = function(arg1, filter) {};

/**
 * @param {string} data
 * @param {Element=} context
 * @param {boolean=} keepScripts
 * @return {Array.<Element>}
 */
jQuery.parseHTML = function(data, context, keepScripts) {};

/**
 * @param {string} data
 * @param {Element=} context
 * @param {boolean=} keepScripts
 * @return {Array.<Element>}
 */
$.parseHTML = function(data, context, keepScripts) {};

/**
 * @param {string} json
 * @return {Object.<string, *>}
 */
jQuery.parseJSON = function(json) {};

/**
 * @param {string} json
 * @return {Object.<string, *>}
 */
$.parseJSON = function(json) {};

/**
 * @param {string} data
 * @return {Document}
 */
jQuery.parseXML = function(data) {};

/**
 * @param {string} data
 * @return {Document}
 */
$.parseXML = function(data) {};

/**
 * @return {{left:number,top:number}}
 * @nosideeffects
 */
jQuery.prototype.position = function() {};

/**
 * @param {string} url
 * @param {(Object.<string,*>|string|
 *     function(string,string,jQuery.jqXHR))=} data
 * @param {(function(string,string,jQuery.jqXHR)|string)=} success
 * @param {string=} dataType
 * @return {jQuery.jqXHR}
 */
jQuery.post = function(url, data, success, dataType) {};

/**
 * @param {string} url
 * @param {(Object.<string,*>|string|
 *     function(string,string,jQuery.jqXHR))=} data
 * @param {(function(string,string,jQuery.jqXHR)|string)=} success
 * @param {string=} dataType
 * @return {jQuery.jqXHR}
 */
$.post = function(url, data, success, dataType) {};

/**
 * @param {(string|Element|jQuery|function(number,string))} arg1
 * @param {(string|Element|jQuery)=} content
 * @return {!jQuery}
 */
jQuery.prototype.prepend = function(arg1, content) {};

/**
 * @param {(jQuerySelector|Element|jQuery)} target
 * @return {!jQuery}
 */
jQuery.prototype.prependTo = function(target) {};

/**
 * @param {jQuerySelector=} selector
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.prev = function(selector) {};

/**
 * @param {jQuerySelector=} selector
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.prevAll = function(selector) {};

/**
 * @param {(jQuerySelector|Element)=} arg1
 * @param {jQuerySelector=} filter
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.prevUntil = function(arg1, filter) {};

/**
 * @param {(string|Object)=} type
 * @param {Object=} target
 * @return {jQuery.Promise}
 */
jQuery.prototype.promise = function(type, target) {};

/**
 * @interface
 * @private
 * @see http://api.jquery.com/Types/#Promise
 */
jQuery.Promise = function () {};

/**
 * @param {jQueryCallback} alwaysCallbacks
 * @param {jQueryCallback=} alwaysCallbacks2
 * @return {jQuery.Promise}
 */
jQuery.Promise.prototype.always =
    function(alwaysCallbacks, alwaysCallbacks2) {};

/**
 * @param {jQueryCallback} doneCallbacks
 * @return {jQuery.Promise}
 */
jQuery.Promise.prototype.done = function(doneCallbacks) {};

/**
 * @param {jQueryCallback} failCallbacks
 * @return {jQuery.Promise}
 */
jQuery.Promise.prototype.fail = function(failCallbacks) {};

/**
 * @param {function()=} doneFilter
 * @param {function()=} failFilter
 * @param {function()=} progressFilter
 * @return {jQuery.Promise}
 */
jQuery.Promise.prototype.pipe =
    function(doneFilter, failFilter, progressFilter) {};

/**
 * @param {jQueryCallback} doneCallbacks
 * @param {jQueryCallback=} failCallbacks
 * @param {jQueryCallback=} progressCallbacks
 * @return {jQuery.Promise}
 */
jQuery.Promise.prototype.then =
    function(doneCallbacks, failCallbacks, progressCallbacks) {};

/**
 * @param {(string|Object.<string,*>)} arg1
 * @param {(string|number|boolean|function(number,String))=} arg2
 * @return {(string|boolean|!jQuery)}
 */
jQuery.prototype.prop = function(arg1, arg2) {};

/**
 * @param {...*} var_args
 * @return {function()}
 */
jQuery.proxy = function(var_args) {};

/**
 * @param {...*} var_args
 * @return {function()}
 */
$.proxy = function(var_args) {};

/**
 * @param {Array.<Element>} elements
 * @param {string=} name
 * @param {Array.<*>=} args
 * @return {!jQuery}
 */
jQuery.prototype.pushStack = function(elements, name, args) {};

/**
 * @param {(string|Array.<function()>|function(function()))=} queueName
 * @param {(Array.<function()>|function(function()))=} arg2
 * @return {(Array.<Element>|!jQuery)}
 */
jQuery.prototype.queue = function(queueName, arg2) {};

/**
 * @param {Element} elem
 * @param {string=} queueName
 * @param {(Array.<function()>|function())=} arg3
 * @return {(Array.<Element>|!jQuery)}
 */
jQuery.queue = function(elem, queueName, arg3) {};

/**
 * @param {Element} elem
 * @param {string=} queueName
 * @param {(Array.<function()>|function())=} arg3
 * @return {(Array.<Element>|!jQuery)}
 */
$.queue = function(elem, queueName, arg3) {};

/**
 * @param {function()} handler
 * @return {!jQuery}
 */
jQuery.prototype.ready = function(handler) {};

/**
 * @param {string=} selector
 * @return {!jQuery}
 */
jQuery.prototype.remove = function(selector) {};

/**
 * @param {string} attributeName
 * @return {!jQuery}
 */
jQuery.prototype.removeAttr = function(attributeName) {};

/**
 * @param {(string|function(number,string))=} arg1
 * @return {!jQuery}
 */
jQuery.prototype.removeClass = function(arg1) {};

/**
 * @param {(string|Array.<string>)=} arg1
 * @return {!jQuery}
 */
jQuery.prototype.removeData = function(arg1) {};

/**
 * @param {Element} elem
 * @param {string=} name
 * @return {!jQuery}
 */
jQuery.removeData = function(elem, name) {};

/**
 * @param {Element} elem
 * @param {string=} name
 * @return {!jQuery}
 */
$.removeData = function(elem, name) {};

/**
 * @param {string} propertyName
 * @return {!jQuery}
 */
jQuery.prototype.removeProp = function(propertyName) {};

/**
 * @param {jQuerySelector} target
 * @return {!jQuery}
 */
jQuery.prototype.replaceAll = function(target) {};

/**
 * @param {(string|Element|jQuery|function())} arg1
 * @return {!jQuery}
 */
jQuery.prototype.replaceWith = function(arg1) {};

/**
 * @param {(function(!jQuery.event=)|Object.<string, *>)=} arg1
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.resize = function(arg1, handler) {};

/**
 * @param {(function(!jQuery.event=)|Object.<string, *>)=} arg1
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.scroll = function(arg1, handler) {};

/**
 * @param {number=} value
 * @return {(number|!jQuery)}
 */
jQuery.prototype.scrollLeft = function(value) {};

/**
 * @param {number=} value
 * @return {(number|!jQuery)}
 */
jQuery.prototype.scrollTop = function(value) {};

/**
 * @param {(function(!jQuery.event=)|Object.<string, *>)=} arg1
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.select = function(arg1, handler) {};

/**
 * @return {string}
 * @nosideeffects
 */
jQuery.prototype.serialize = function() {};

/**
 * @return {Array.<Object.<string, *>>}
 * @nosideeffects
 */
jQuery.prototype.serializeArray = function() {};

/**
 * @param {(string|number|function())=} duration
 * @param {(function()|string)=} arg2
 * @param {function()=} callback
 * @return {!jQuery}
 */
jQuery.prototype.show = function(duration, arg2, callback) {};

/**
 * @param {jQuerySelector=} selector
 * @return {!jQuery}
 * @nosideeffects
 */
jQuery.prototype.siblings = function(selector) {};

/**
 * @deprecated
 * @return {number}
 * @nosideeffects
 */
jQuery.prototype.size = function() {};

/**
 * @param {number} start
 * @param {number=} end
 * @return {!jQuery}
 */
jQuery.prototype.slice = function(start, end) {};

/**
 * @param {(Object.<string,*>|string|number)=} optionsOrDuration
 * @param {(function()|string)=} completeOrEasing
 * @param {function()=} complete
 * @return {!jQuery}
 */
jQuery.prototype.slideDown =
    function(optionsOrDuration, completeOrEasing, complete) {};

/**
 * @param {(Object.<string,*>|string|number)=} optionsOrDuration
 * @param {(function()|string)=} completeOrEasing
 * @param {function()=} complete
 * @return {!jQuery}
 */
jQuery.prototype.slideToggle =
    function(optionsOrDuration, completeOrEasing, complete) {};

/**
 * @param {(Object.<string,*>|string|number)=} optionsOrDuration
 * @param {(function()|string)=} completeOrEasing
 * @param {function()=} complete
 * @return {!jQuery}
 */
jQuery.prototype.slideUp =
    function(optionsOrDuration, completeOrEasing, complete) {};

/**
 * @param {(boolean|string)=} arg1
 * @param {boolean=} arg2
 * @param {boolean=} jumpToEnd
 * @return {!jQuery}
 */
jQuery.prototype.stop = function(arg1, arg2, jumpToEnd) {};

/**
 * @param {(function(!jQuery.event=)|Object.<string, *>)=} arg1
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.submit = function(arg1, handler) {};

/** @type {Object.<string, *>} */
jQuery.support;

/** @type {Object.<string, *>} */
$.support;

/** @type {boolean} */
jQuery.support.boxModel;

/** @type {boolean} */
$.support.boxModel;

/** @type {boolean} */
jQuery.support.changeBubbles;

/** @type {boolean} */
$.support.changeBubbles;

/** @type {boolean} */
jQuery.support.cors;

/** @type {boolean} */
$.support.cors;

/** @type {boolean} */
jQuery.support.cssFloat;

/** @type {boolean} */
$.support.cssFloat;

/** @type {boolean} */
jQuery.support.fixedPosition;

/** @type {boolean} */
$.support.fixedPosition;

/** @type {boolean} */
jQuery.support.hrefNormalized;

/** @type {boolean} */
$.support.hrefNormalized;

/** @type {boolean} */
jQuery.support.htmlSerialize;

/** @type {boolean} */
$.support.htmlSerialize;

/** @type {boolean} */
jQuery.support.leadingWhitespace;

/** @type {boolean} */
$.support.leadingWhitespace;

/** @type {boolean} */
jQuery.support.noCloneEvent;

/** @type {boolean} */
$.support.noCloneEvent;

/** @type {boolean} */
jQuery.support.opacity;

/** @type {boolean} */
$.support.opacity;

/** @type {boolean} */
jQuery.support.scriptEval;

/** @type {boolean} */
$.support.scriptEval;

/** @type {boolean} */
jQuery.support.style;

/** @type {boolean} */
$.support.style;

/** @type {boolean} */
jQuery.support.submitBubbles;

/** @type {boolean} */
$.support.submitBubbles;

/** @type {boolean} */
jQuery.support.tbody;

/** @type {boolean} */
$.support.tbody;

/**
 * @param {(string|function(number,string))=} arg1
 * @return {(string|!jQuery)}
 */
jQuery.prototype.text = function(arg1) {};

/**
 * @return {Array.<Element>}
 * @nosideeffects
 */
jQuery.prototype.toArray = function() {};

/**
 * Refers to the method from the Effects category. There used to be a toggle
 * method on the Events category which was removed starting version 1.9.
 * @param {(number|string|Object.<string,*>|boolean)=} arg1
 * @param {(function()|string)=} arg2
 * @param {function()=} arg3
 * @return {!jQuery}
 */
jQuery.prototype.toggle = function(arg1, arg2, arg3) {};

/**
 * @param {(string|boolean|function(number,string,boolean))=} arg1
 * @param {boolean=} flag
 * @return {!jQuery}
 */
jQuery.prototype.toggleClass = function(arg1, flag) {};

/**
 * @param {(string|jQuery.event)} arg1
 * @param {...*} var_args
 * @return {!jQuery}
 */
jQuery.prototype.trigger = function(arg1, var_args) {};

/**
 * @param {string|jQuery.event} eventType
 * @param {Array.<*>=} extraParameters
 * @return {*}
 */
jQuery.prototype.triggerHandler = function(eventType, extraParameters) {};

/**
 * @param {string} str
 * @return {string}
 * @nosideeffects
 */
jQuery.trim = function(str) {};

/**
 * @param {string} str
 * @return {string}
 * @nosideeffects
 */
$.trim = function(str) {};

/**
 * @param {*} obj
 * @return {string}
 * @nosideeffects
 */
jQuery.type = function(obj) {};

/**
 * @param {*} obj
 * @return {string}
 * @nosideeffects
 */
$.type = function(obj) {};

/**
 * @param {(string|function(!jQuery.event=)|jQuery.event)=} arg1
 * @param {(function(!jQuery.event=)|boolean)=} arg2
 * @return {!jQuery}
 */
jQuery.prototype.unbind = function(arg1, arg2) {};

/**
 * @param {string=} arg1
 * @param {(string|Object.<string,*>)=} arg2
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.undelegate = function(arg1, arg2, handler) {};

/**
 * @param {Array.<Element>} arr
 * @return {Array.<Element>}
 */
jQuery.unique = function(arr) {};

/**
 * @param {Array.<Element>} arr
 * @return {Array.<Element>}
 */
$.unique = function(arr) {};

/**
 * @deprecated
 * @param {(function(!jQuery.event=)|Object.<string, *>)} arg1
 * @param {function(!jQuery.event=)=} handler
 * @return {!jQuery}
 */
jQuery.prototype.unload = function(arg1, handler) {};

/** @return {!jQuery} */
jQuery.prototype.unwrap = function() {};

/**
 * @param {(string|Array.<string>|function(number,*))=} arg1
 * @return {(string|number|Array.<string>|!jQuery)}
 */
jQuery.prototype.val = function(arg1) {};

/**
 * Note: The official documentation (https://api.jquery.com/jQuery.when/) says
 * jQuery.when accepts deferreds, but it, actually, accepts any type, e.g.:
 *
 * jQuery.when(jQuery.ready, jQuery.ajax(''), jQuery('#my-element'), 1)
 *
 * If an argument is not an "observable" (a promise-like object) it is wrapped
 * into a promise.
 * @param {*} deferred
 * @param {...*} deferreds
 * @return {jQuery.Promise}
 */
jQuery.when = function(deferred, deferreds) {};

/**
 * Note: See jQuery.when().
 * @param {*} deferred
 * @param {...*} deferreds
 * @return {jQuery.Promise}
 */
$.when = function(deferred, deferreds) {};

/**
 * @param {(string|number|function(number,number))=} arg1
 * @return {(number|!jQuery)}
 */
jQuery.prototype.width = function(arg1) {};

/**
 * @param {(string|jQuerySelector|Element|jQuery|function(number))} arg1
 * @return {!jQuery}
 */
jQuery.prototype.wrap = function(arg1) {};

/**
 * @param {(string|jQuerySelector|Element|jQuery)} wrappingElement
 * @return {!jQuery}
 */
jQuery.prototype.wrapAll = function(wrappingElement) {};

/**
 * @param {(string|function(number))} arg1
 * @return {!jQuery}
 */
jQuery.prototype.wrapInner = function(arg1) {};
/*
 * Copyright 2012 The Closure Compiler Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Externs for Angular 1.
 *
 * TODO: Mocks.
 * TODO: Remaining Services:
 *     $compileProvider
 *     $controller
 *     $controllerProvider
 *     $cookies
 *     $cookieStore
 *     $document
 *     $httpBackend
 *     $interpolate
 *     $locale
 *     $resource
 *     $rootElement
 *     $rootScope
 *     $rootScopeProvider
 *     $routeParams
 *     $window
 * TODO: Resolve two issues with angular.$http
 *         1) angular.$http cannot be declared as a callable type.
 *            Its helper methods should be used instead.
 *         2) angular.$http.delete cannot be added as an extern
 *            as it is a reserved keyword.
 *            Its use is potentially not supported in IE.
 *            It may be aliased as 'remove' in a future version.
 *
 * @see http://angularjs.org/
 * @externs
 */

/**
 * @typedef {(Window|Document|Element|Array.<Element>|string|!angular.JQLite|
 *     NodeList|{length: number})}
 */
var JQLiteSelector;

/**
 * @type {Object}
 * @const
 */
var angular = {};

/**
 * @param {Object} self
 * @param {Function} fn
 * @param {...*} args
 * @return {Function}
 */
angular.bind = function(self, fn, args) {};

/**
 * @param {Element|HTMLDocument} element
 * @param {Array.<string|Function>=} opt_modules
 * @return {!angular.$injector}
 */
angular.bootstrap = function(element, opt_modules) {};

/**
 * @param {T} source
 * @param {(Object|Array)=} opt_dest
 * @return {T}
 * @template T
 */
angular.copy = function(source, opt_dest) {};

/**
 * @param {(JQLiteSelector|Object)} element
 * @param {(JQLiteSelector|Object)=} opt_context
 * @return {!angular.JQLite}
 */
angular.element = function(element, opt_context) {};

/**
 * @param {*} o1
 * @param {*} o2
 * @return {boolean}
 */
angular.equals = function(o1, o2) {};

/**
 * @param {Object} dest
 * @param {...Object} srcs
 */
angular.extend = function(dest, srcs) {};

/**
 * @param {Object|Array} obj
 * @param {Function} iterator
 * @param {Object=} opt_context
 * @return {Object|Array}
 */
angular.forEach = function(obj, iterator, opt_context) {};

/**
 * @param {string|T} json
 * @return {Object|Array|Date|T}
 * @template T
 */
angular.fromJson = function(json) {};

/**
 * @param {*} arg
 * @return {*}
 */
angular.identity = function(arg) {};

/**
 * @param {Array.<string|Function>} modules
 * @return {!angular.$injector}
 */
angular.injector = function(modules) {};

/**
 * @param {*} value
 * @return {boolean}
 */
angular.isArray = function(value) {};

/**
 * @param {*} value
 * @return {boolean}
 */
angular.isDate = function(value) {};

/**
 * @param {*} value
 * @return {boolean}
 */
angular.isDefined = function(value) {};

/**
 * @param {*} value
 * @return {boolean}
 */
angular.isElement = function(value) {};

/**
 * @param {*} value
 * @return {boolean}
 */
angular.isFunction = function(value) {};

/**
 * @param {*} value
 * @return {boolean}
 */
angular.isNumber = function(value) {};

/**
 * @param {*} value
 * @return {boolean}
 */
angular.isObject = function(value) {};

/**
 * @param {*} value
 * @return {boolean}
 */
angular.isString = function(value) {};

/**
 * @param {*} value
 * @return {boolean}
 */
angular.isUndefined = function(value) {};

/**
 * @param {string} s
 * @return {string}
 */
angular.lowercase = function(s) {};

angular.mock = {};

/**
 * @param {string} name
 * @param {Array.<string>=} opt_requires
 * @param {(Function|Array.<string|Function>)=} opt_configFn
 * @return {!angular.Module}
 */
angular.module = function(name, opt_requires, opt_configFn) {};

angular.noop = function() {};

/**
 * @param {Object|Array|Date|string|number} obj
 * @param {boolean=} opt_pretty
 * @return {string}
 */
angular.toJson = function(obj, opt_pretty) {};

/**
 * @param {string} s
 * @return {string}
 */
angular.uppercase = function(s) {};

/**
 * @typedef {{
 *   $attr: Object.<string,string>,
 *   $normalize: function(string): string,
 *   $observe: function(string, function(*)): function(*),
 *   $set: function(string, ?(string|boolean), boolean=, string=)
 *   }}
 */
angular.Attributes;

/**
 * @type {Object.<string, string>}
 */
angular.Attributes.$attr;

/**
 * @param {string} name
 * @return {string}
 */
angular.Attributes.$normalize = function(name) {};

/**
 * @param {string} key
 * @param {function(*)} fn
 * @return {function(*)}
 */
angular.Attributes.$observe = function(key, fn) {};

/**
 * @param {string} key
 * @param {?(string|boolean)} value
 * @param {boolean=} opt_writeAttr
 * @param {string=} opt_attrName
 */
angular.Attributes.$set = function(key, value, opt_writeAttr, opt_attrName) {};

/**
 * @typedef {{
 *   pre: (function(
 *           !angular.Scope=,
 *           !angular.JQLite=,
 *           !angular.Attributes=,
 *           (!Object|!Array.<!Object>)=)|
 *       undefined),
 *   post: (function(
 *           !angular.Scope=,
 *           !angular.JQLite=,
 *           !angular.Attributes=,
 *           (!Object|Array.<!Object>)=)|
 *       undefined)
 *   }}
 */
angular.LinkingFunctions;

/**
 * @param {!angular.Scope=} scope
 * @param {!angular.JQLite=} iElement
 * @param {!angular.Attributes=} iAttrs
 * @param {(!Object|!Array.<!Object>)=} controller
 */
angular.LinkingFunctions.pre = function(scope, iElement, iAttrs, controller) {};

/**
 * @param {!angular.Scope=} scope
 * @param {!angular.JQLite=} iElement
 * @param {!angular.Attributes=} iAttrs
 * @param {(!Object|!Array.<!Object>)=} controller
 */
angular.LinkingFunctions.post = function(scope, iElement, iAttrs, controller) {
};

/**
 * @typedef {{
 *   compile: (function(
 *       !angular.JQLite=, !angular.Attributes=, Function=)|undefined),
 *   controller: (Function|undefined),
 *   controllerAs: (string|undefined),
 *   link: (function(
 *       !angular.Scope=, !angular.JQLite=, !angular.Attributes=,
 *       (!Object|!Array.<!Object>)=)|
 *       !angular.LinkingFunctions|
 *       undefined),
 *   name: (string|undefined),
 *   priority: (number|undefined),
 *   replace: (boolean|undefined),
 *   require: (string|Array.<string>|undefined),
 *   restrict: (string|undefined),
 *   scope: (boolean|Object.<string, string>|undefined),
 *   template: (string|undefined),
 *   templateUrl: (string|
 *       function(!angular.JQLite=,!angular.Attributes=)|
 *       undefined),
 *   terminal: (boolean|undefined),
 *   transclude: (boolean|string|undefined)
 *   }}
 */
angular.Directive;

/**
 * @param {!angular.JQLite=} tElement
 * @param {!angular.Attributes=} tAttrs
 * @param {Function=} transclude
 * @return {Function|angular.LinkingFunctions|undefined}
 */
angular.Directive.compile = function(tElement, tAttrs, transclude) {};

angular.Directive.controller = function() {};

/**
 * @type {string|undefined}
 */
angular.Directive.controllerAs;

/**
 * @type {(
 *   function(!angular.Scope=, !angular.JQLite=, !angular.Attributes=,
 *     (!Object|!Array.<!Object>)=)|
 *   !angular.LinkingFunctions|
 *   undefined
 * )}
 */
angular.Directive.link;

/**
 * @type {(string|undefined)}
 */
angular.Directive.name;

/**
 * @type {(number|undefined)}
 */
angular.Directive.priority;

/**
 * @type {(boolean|undefined)}
 */
angular.Directive.replace;

/**
 * @type {(string|Array.<string>|undefined)}
 */
angular.Directive.require;

/**
 * @type {(string|undefined)}
 */
angular.Directive.restrict;

/**
 * @type {(boolean|Object.<string, string>|undefined)}
 */
angular.Directive.scope;

/**
 * @type {(string|undefined)}
 * TODO: This can also be a function which returns a string.
 */
angular.Directive.template;

/**
 * @type {(string|function(!angular.JQLite=, !angular.Attributes=)|undefined)}
 */
angular.Directive.templateUrl;

/**
 * @type {(boolean|undefined)}
 */
angular.Directive.terminal;

/**
 * @type {(boolean|string|undefined)}
 */
angular.Directive.transclude;

/**
 * @typedef {{
 *   addClass: function(string): !angular.JQLite,
 *   after: function(JQLiteSelector): !angular.JQLite,
 *   append: function(JQLiteSelector): !angular.JQLite,
 *   attr: function(string, (string|boolean)=):
 *       (!angular.JQLite|string|boolean),
 *   bind: function(string, Function): !angular.JQLite,
 *   children: function(): !angular.JQLite,
 *   clone: function(): !angular.JQLite,
 *   contents: function(): !angular.JQLite,
 *   controller: function(string=): Object,
 *   css: function(string, string=): (!angular.JQLite|string),
 *   data: function(string=, *=): *,
 *   eq: function(number): !angular.JQLite,
 *   find: function(string): !angular.JQLite,
 *   hasClass: function(string): boolean,
 *   html: function(string=): (!angular.JQLite|string),
 *   inheritedData: function(string=, *=): *,
 *   injector: function(): !angular.$injector,
 *   length: number,
 *   next: function(): !angular.JQLite,
 *   on: function(string, Function): !angular.JQLite,
 *   off: function(string=, Function=): !angular.JQLite,
 *   parent: function(): !angular.JQLite,
 *   prepend: function(JQLiteSelector): !angular.JQLite,
 *   prop: function(string, *=): *,
 *   ready: function(Function): !angular.JQLite,
 *   remove: function(): !angular.JQLite,
 *   removeAttr: function(string): !angular.JQLite,
 *   removeClass: function(string): !angular.JQLite,
 *   removeData: function(): !angular.JQLite,
 *   replaceWith: function(JQLiteSelector): !angular.JQLite,
 *   scope: function(): !angular.Scope,
 *   text: function(string=): (!angular.JQLite|string),
 *   toggleClass: function(string, boolean=): !angular.JQLite,
 *   triggerHandler: function(string, *=): !angular.JQLite,
 *   unbind: function(string=, Function=): !angular.JQLite,
 *   val: function(string=): (!angular.JQLite|string),
 *   wrap: function(JQLiteSelector): !angular.JQLite
 *   }}
 */
angular.JQLite;

/**
 * @param {string} name
 * @return {!angular.JQLite}
 */
angular.JQLite.addClass = function(name) {};

/**
 * @param {JQLiteSelector} element
 * @return {!angular.JQLite}
 */
angular.JQLite.after = function(element) {};

/**
 * @param {JQLiteSelector} element
 * @return {!angular.JQLite}
 */
angular.JQLite.append = function(element) {};

/**
 * @param {string} name
 * @param {(string|boolean)=} opt_value
 * @return {!angular.JQLite|string|boolean}
 */
angular.JQLite.attr = function(name, opt_value) {};

/**
 * @param {string} type
 * @param {Function} fn
 * @return {!angular.JQLite}
 */
angular.JQLite.bind = function(type, fn) {};

/**
 * @return {!angular.JQLite}
 */
angular.JQLite.children = function() {};

/**
 * @return {!angular.JQLite}
 */
angular.JQLite.clone = function() {};

/**
 * @return {!angular.JQLite}
 */
angular.JQLite.contents = function() {};

/**
 * @param {string=} opt_name
 * @return {Object}
 */
angular.JQLite.controller = function(opt_name) {};

/**
 * @param {string} name
 * @param {string=} opt_value
 * @return {!angular.JQLite|string}
 */
angular.JQLite.css = function(name, opt_value) {};

/**
 * @param {string=} opt_key
 * @param {*=} opt_value
 * @return {*}
 */
angular.JQLite.data = function(opt_key, opt_value) {};

/**
 * @param {number} index
 * @return {!angular.JQLite}
 */
angular.JQLite.eq = function(index) {};

/**
 * @param {string} selector
 * @return {!angular.JQLite}
 */
angular.JQLite.find = function(selector) {};

/**
 * @param {string} name
 * @return {boolean}
 */
angular.JQLite.hasClass = function(name) {};

/**
 * @param {string=} opt_value
 * @return {!angular.JQLite|string}
 */
angular.JQLite.html = function(opt_value) {};

/**
 * @param {string=} opt_key
 * @param {*=} opt_value
 * @return {*}
 */
angular.JQLite.inheritedData = function(opt_key, opt_value) {};

/**
 * @return {!angular.$injector}
 */
angular.JQLite.injector = function() {};

/** @type {number} */
angular.JQLite.length;

/**
 * @return {!angular.JQLite}
 */
angular.JQLite.next = function() {};

/**
 * @param {string} type
 * @param {Function} fn
 * @return {!angular.JQLite}
 */
angular.JQLite.on = function(type, fn) {};

/**
 * @param {string=} opt_type
 * @param {Function=} opt_fn
 * @return {!angular.JQLite}
 */
angular.JQLite.off = function(opt_type, opt_fn) {};

/**
 * @return {!angular.JQLite}
 */
angular.JQLite.parent = function() {};

/**
 * @param {JQLiteSelector} element
 * @return {!angular.JQLite}
 */
angular.JQLite.prepend = function(element) {};

/**
 * @param {string} name
 * @param {*=} opt_value
 * @return {*}
 */
angular.JQLite.prop = function(name, opt_value) {};

/**
 * @param {Function} fn
 * @return {!angular.JQLite}
 */
angular.JQLite.ready = function(fn) {};

/**
 * @return {!angular.JQLite}
 */
angular.JQLite.remove = function() {};

/**
 * @param {string} name
 * @return {!angular.JQLite}
 */
angular.JQLite.removeAttr = function(name) {};

/**
 * @param {string} name
 * @return {!angular.JQLite}
 */
angular.JQLite.removeClass = function(name) {};

/**
 * @return {!angular.JQLite}
 */
angular.JQLite.removeData = function() {};

/**
 * @param {JQLiteSelector} element
 * @return {!angular.JQLite}
 */
angular.JQLite.replaceWith = function(element) {};

/**
 * @return {!angular.Scope}
 */
angular.JQLite.scope = function() {};

/**
 * @param {string=} opt_value
 * @return {!angular.JQLite|string}
 */
angular.JQLite.text = function(opt_value) {};

/**
 * @param {string} name
 * @param {boolean=} opt_condition
 * @return {!angular.JQLite}
 */
angular.JQLite.toggleClass = function(name, opt_condition) {};

/**
 * @param {string} type
 * @param {*=} opt_value
 * @return {!angular.JQLite}
 */
angular.JQLite.triggerHandler = function(type, opt_value) {};

/**
 * @param {string=} opt_type
 * @param {Function=} opt_fn
 * @return {!angular.JQLite}
 */
angular.JQLite.unbind = function(opt_type, opt_fn) {};

/**
 * @param {string=} opt_value
 * @return {!angular.JQLite|string}
 */
angular.JQLite.val = function(opt_value) {};

/**
 * @param {JQLiteSelector} element
 * @return {!angular.JQLite}
 */
angular.JQLite.wrap = function(element) {};

/**
 * @typedef {{
 *   config: function((Function|Array.<string|Function>)):!angular.Module,
 *   constant: function(string, *):angular.Module,
 *   controller:
 *       (function(string, (Function|Array.<string|Function>)):!angular.Module|
 *       function(!Object.<(Function|Array.<string|Function>)>):
 *           !angular.Module),
 *   directive:
 *       (function(string, (Function|Array.<string|Function>)):!angular.Module|
 *       function(!Object.<(Function|Array.<string|Function>)>):
 *           !angular.Module),
 *   factory:
 *       function(string, (Function|Array.<string|Function>)):!angular.Module,
 *   filter:
 *       function(string, (Function|Array.<string|Function>)):!angular.Module,
 *   name: string,
 *   provider: function(string,
 *       (Object|Function|Array.<string|Function>)):!angular.Module,
 *   requires: !Array.<string>,
 *   run: function((Function|Array.<string|Function>)):!angular.Module,
 *   service:
 *       function(string, (Function|Array.<string|Function>)):!angular.Module,
 *   value: function(string, *):!angular.Module
 *   }}
 */
angular.Module;

/**
 * @param {Function|Array.<string|Function>} configFn
 * @return {!angular.Module}
 */
angular.Module.config = function(configFn) {};

/**
 * @param {string} name
 * @param {*} object
 * @return {!angular.Module}
 */
angular.Module.constant = function(name, object) {};

/**
 * @param {string} name
 * @param {Function|Array.<string|Function>} constructor
 * @return {!angular.Module}
 */
angular.Module.controller = function(name, constructor) {};

/**
 * @param {string} name
 * @param {Function|Array.<string|Function>} directiveFactory
 * @return {!angular.Module}
 */
angular.Module.directive = function(name, directiveFactory) {};

/**
 * @param {string} name
 * @param {Function|Array.<string|Function>} providerFunction
 * @return {!angular.Module}
 */
angular.Module.factory = function(name, providerFunction) {};

/**
 * @param {string} name
 * @param {Function|Array.<string|Function>} filterFactory
 * @return {!angular.Module}
 */
angular.Module.filter = function(name, filterFactory) {};

/**
 * @param {string} name
 * @param {Function|Array.<string|Function>} providerType
 * @return {!angular.Module}
 */
angular.Module.provider = function(name, providerType) {};

/**
 * @param {Function|Array.<string|Function>} initializationFn
 * @return {!angular.Module}
 */
angular.Module.run = function(initializationFn) {};

/**
 * @param {string} name
 * @param {Function|Array.<string|Function>} constructor
 * @return {!angular.Module}
 */
angular.Module.service = function(name, constructor) {};

/**
 * @param {string} name
 * @param {*} object
 * @return {!angular.Module}
 */
angular.Module.value = function(name, object) {};

/**
 * @type {string}
 */
angular.Module.name = '';

/**
 * @type {Array.<string>}
 */
angular.Module.requires;

/**
 * @typedef {{
 *   $$phase: string,
 *   $apply: function((string|function(!angular.Scope))=):*,
 *   $broadcast: function(string, ...[*]),
 *   $destroy: function(),
 *   $digest: function(),
 *   $emit: function(string, ...[*]),
 *   $eval: function((string|function(!angular.Scope))=, Object=):*,
 *   $evalAsync: function((string|function())=),
 *   $id: string,
 *   $new: function(boolean=):!angular.Scope,
 *   $on: function(string, function(!angular.Scope.Event, ...[?])):function(),
 *   $parent: !angular.Scope,
 *   $root: !angular.Scope,
 *   $watch: function(
 *       (string|Function), (string|Function)=, boolean=):function(),
 *   $watchCollection: function(
 *       (string|Function), (string|Function)=):function()
 *   }}
 */
angular.Scope;

/** @type {string} */
angular.Scope.$$phase;

/**
 * @param {(string|function(!angular.Scope))=} opt_exp
 * @return {*}
 */
angular.Scope.$apply = function(opt_exp) {};

/**
 * @param {string} name
 * @param {...*} args
 */
angular.Scope.$broadcast = function(name, args) {};

angular.Scope.$destroy = function() {};

angular.Scope.$digest = function() {};

/**
 * @param {string} name
 * @param {...*} args
 */
angular.Scope.$emit = function(name, args) {};

/**
 * @param {(string|function())=} opt_exp
 * @param {Object=} opt_locals
 * @return {*}
 */
angular.Scope.$eval = function(opt_exp, opt_locals) {};

/**
 * @param {(string|function())=} opt_exp
 */
angular.Scope.$evalAsync = function(opt_exp) {};

/** @type {string} */
angular.Scope.$id;

/**
 * @param {boolean=} opt_isolate
 * @return {!angular.Scope}
 */
angular.Scope.$new = function(opt_isolate) {};

/**
 * @param {string} name
 * @param {function(!angular.Scope.Event, ...[?])} listener
 * @return {function()}
 */
angular.Scope.$on = function(name, listener) {};

/** @type {!angular.Scope} */
angular.Scope.$parent;

/** @type {!angular.Scope} */
angular.Scope.$root;

/**
 * @param {string|!Function} exp
 * @param {(string|Function)=} opt_listener
 * @param {boolean=} opt_objectEquality
 * @return {function()}
 */
angular.Scope.$watch = function(exp, opt_listener, opt_objectEquality) {};

/**
 * @param {string|!Function} exp
 * @param {(string|Function)=} opt_listener
 * @return {function()}
 */
angular.Scope.$watchCollection = function(exp, opt_listener) {};

/**
 * @typedef {{
 *   currentScope: !angular.Scope,
 *   defaultPrevented: boolean,
 *   name: string,
 *   preventDefault: function(),
 *   stopPropagation: function(),
 *   targetScope: !angular.Scope
 *   }}
 */
angular.Scope.Event;

/** @type {!angular.Scope} */
angular.Scope.Event.currentScope;

/** @type {boolean} */
angular.Scope.Event.defaultPrevented;

/** @type {string} */
angular.Scope.Event.name;

angular.Scope.Event.preventDefault = function() {};

angular.Scope.Event.stopPropagation = function() {};

/** @type {!angular.Scope} */
angular.Scope.Event.targetScope;

/**
 * @type {Object}
 */
angular.version = {};

/**
 * @type {string}
 */
angular.version.full = '';

/**
 * @type {number}
 */
angular.version.major = 0;

/**
 * @type {number}
 */
angular.version.minor = 0;

/**
 * @type {number}
 */
angular.version.dot = 0;

/**
 * @type {string}
 */
angular.version.codeName = '';

/******************************************************************************
 * $anchorScroll Service
 *****************************************************************************/

/**
 * @typedef {function()}
 */
angular.$anchorScroll;

/******************************************************************************
 * $anchorScrollProvider Service
 *****************************************************************************/

/**
 * @typedef {{
 *   disableAutoScrolling: function()
 *   }}
 */
angular.$anchorScrollProvider;

/**
 * @type {function()}
 */
angular.$anchorScrollProvider.disableAutoScrolling = function() {};

/******************************************************************************
 * $animate Service
 *****************************************************************************/

/**
 * @constructor
 */
angular.$animate;

/**
 * @param {JQLiteSelector} element
 * @param {JQLiteSelector} parentElement
 * @param {JQLiteSelector} afterElement
 * @param {function()=} opt_doneCallback
 */
angular.$animate.prototype.enter = function(
    element, parentElement, afterElement, opt_doneCallback) {};

/**
 * @param {JQLiteSelector} element
 * @param {function()=} opt_doneCallback
 */
angular.$animate.prototype.leave = function(element, opt_doneCallback) {};

/**
 * @param {JQLiteSelector} element
 * @param {JQLiteSelector} parentElement
 * @param {JQLiteSelector} afterElement
 * @param {function()=} opt_doneCallback
 */
angular.$animate.prototype.move = function(
    element, parentElement, afterElement, opt_doneCallback) {};

/**
 * @param {JQLiteSelector} element
 * @param {string} className
 * @param {function()=} opt_doneCallback
 */
angular.$animate.prototype.addClass = function(
    element, className, opt_doneCallback) {};

/**
 * @param {JQLiteSelector} element
 * @param {string} className
 * @param {function()=} opt_doneCallback
 */
angular.$animate.prototype.removeClass = function(
    element, className, opt_doneCallback) {};

/**
 * @param {boolean=} opt_value
 * @param {JQLiteSelector=} opt_element
 * @return {boolean}
 */
angular.$animate.prototype.enabled = function(opt_value, opt_element) {};

/******************************************************************************
 * $compile Service
 *****************************************************************************/

/**
 * @typedef {
 *   function(
 *       (JQLiteSelector|Object),
 *       function(!angular.Scope, Function=)=, number=):
 *           function(!angular.Scope,
 *               function(Object, !angular.Scope=)=): Object}
 */
angular.$compile;

/******************************************************************************
 * $cacheFactory Service
 *****************************************************************************/

/**
 * @typedef {
 *   function(string, angular.$cacheFactory.Options=):
 *       !angular.$cacheFactory.Cache}
 */
angular.$cacheFactory;

/** @typedef {{capacity: (number|undefined)}} */
angular.$cacheFactory.Options;

/**
 * @template T
 * @constructor
 */
angular.$cacheFactory.Cache = function() {};

/**
 * @return {!angular.$cacheFactory.Cache.Info}
 */
angular.$cacheFactory.Cache.prototype.info = function() {};

/**
 * @param {string} key
 * @param {T} value
 */
angular.$cacheFactory.Cache.prototype.put = function(key, value) {};

/**
 * @param {string} key
 * @return {T}
 */
angular.$cacheFactory.Cache.prototype.get = function(key) {};

/**
 * @param {string} key
 */
angular.$cacheFactory.Cache.prototype.remove = function(key) {};

angular.$cacheFactory.Cache.prototype.removeAll = function() {};
angular.$cacheFactory.Cache.prototype.destroy = function() {};

/**
 * @typedef {{
 *   id: string,
 *   size: number,
 *   options: angular.$cacheFactory.Options
 *   }}
 */
angular.$cacheFactory.Cache.Info;

/******************************************************************************
 * $exceptionHandler Service
 *****************************************************************************/

/**
 * @typedef {function(Error, string=)}
 */
angular.$exceptionHandler;

/******************************************************************************
 * $filter Service
 *****************************************************************************/

/**
 * @typedef {function(string): !Function}
 */
angular.$filter;

/**
 * The 'orderBy' filter is available through $filterProvider and AngularJS
 * injection; but is not accessed through a documented public API of AngularJS.
 * <p>In current AngularJS version the injection is satisfied by
 * angular.orderByFunction, where the implementation is found.
 * <p>See http://docs.angularjs.org/api/ng.filter:orderBy.
 * @typedef {function(Array,
 *     (string|function(?):*|Array.<(string|function(?):*)>),
 *     boolean=): Array}
 */
angular.$filter.orderBy;

/******************************************************************************
 * $filterProvider Service
 *****************************************************************************/

/**
 * @typedef {{
 *   register: function(string, (!Function|!Array.<string|!Function>))
 *   }}
 */
angular.$filterProvider;

/**
 * @param {string} name
 * @param {(!Function|!Array.<string|!Function>)} fn
 */
angular.$filterProvider.register = function(name, fn) {};

/******************************************************************************
 * $http Service
 *****************************************************************************/

/**
 * This is a typedef because the closure compiler does not allow
 * defining a type that is a function with properties.
 * If you are trying to use the $http service as a function, try
 * using one of the helper functions instead.
 * @typedef {{
 *   delete: function(string, angular.$http.Config=):!angular.$http.HttpPromise,
 *   get: function(string, angular.$http.Config=):!angular.$http.HttpPromise,
 *   head: function(string, angular.$http.Config=):!angular.$http.HttpPromise,
 *   jsonp: function(string, angular.$http.Config=):!angular.$http.HttpPromise,
 *   post: function(string, *, angular.$http.Config=):
 *       !angular.$http.HttpPromise,
 *   put: function(string, *, angular.$http.Config=):!angular.$http.HttpPromise,
 *   defaults: angular.$http.Config,
 *   pendingRequests: !Array.<angular.$http.Config>
 * }}
 */
angular.$http;

/**
 * @typedef {{
 *   cache: (boolean|!angular.$cacheFactory.Cache|undefined),
 *   data: (string|Object|undefined),
 *   headers: (Object|undefined),
 *   method: (string|undefined),
 *   params: (Object.<(string|Object)>|undefined),
 *   timeout: (number|!angular.$q.Promise|undefined),
 *   transformRequest:
 *       (function((string|Object), Object):(string|Object)|
 *       Array.<function((string|Object), Object):(string|Object)>|undefined),
 *   transformResponse:
 *       (function((string|Object), Object):(string|Object)|
 *       Array.<function((string|Object), Object):(string|Object)>|undefined),
 *   url: (string|undefined),
 *   withCredentials: (boolean|undefined)
 * }}
 */
angular.$http.Config;

angular.$http.Config.transformRequest;

angular.$http.Config.transformResponse;

// /**
//  * This extern is currently incomplete as delete is a reserved word.
//  * To use delete, index $http.
//  * Example: $http['delete'](url, opt_config);
//  * @param {string} url
//  * @param {angular.$http.Config=} opt_config
//  * @return {!angular.$http.HttpPromise}
//  */
// angular.$http.delete = function(url, opt_config) {};

/**
 * @param {string} url
 * @param {angular.$http.Config=} opt_config
 * @return {!angular.$http.HttpPromise}
 */
angular.$http.get = function(url, opt_config) {};

/**
 * @param {string} url
 * @param {angular.$http.Config=} opt_config
 * @return {!angular.$http.HttpPromise}
 */
angular.$http.head = function(url, opt_config) {};

/**
 * @param {string} url
 * @param {angular.$http.Config=} opt_config
 * @return {!angular.$http.HttpPromise}
 */
angular.$http.jsonp = function(url, opt_config) {};

/**
 * @param {string} url
 * @param {*} data
 * @param {angular.$http.Config=} opt_config
 * @return {!angular.$http.HttpPromise}
 */
angular.$http.post = function(url, data, opt_config) {};

/**
 * @param {string} url
 * @param {*} data
 * @param {angular.$http.Config=} opt_config
 * @return {!angular.$http.HttpPromise}
 */
angular.$http.put = function(url, data, opt_config) {};

/**
 * @type {angular.$http.Config}
 */
angular.$http.defaults;

/**
 * @type {Array.<angular.$http.Config>}
 * @const
 */
angular.$http.pendingRequests;

/**
 * @typedef {function((string|Object), number,
 *     function(string=): (string|Object|null), angular.$http.Config)}
 */
angular.HttpCallback;

/**
 * @typedef {{
 *   then: function(
 *       ?function(!angular.$http.Response),
 *       ?function(!angular.$http.Response)=,
 *       ?function(!angular.$http.Response)=): !angular.$http.HttpPromise,
 *   catch: function(
 *       ?function(!angular.$http.Response)): !angular.$http.HttpPromise,
 *   finally: function(
 *       ?function(!angular.$http.Response)): !angular.$http.HttpPromise,
 *   success: function(!angular.HttpCallback): !angular.$http.HttpPromise,
 *   error: function(!angular.HttpCallback): !angular.$http.HttpPromise
 * }}
 */
angular.$http.HttpPromise;

/**
 * @param {?function(!angular.$http.Response)} successCallback
 * @param {?function(!angular.$http.Response)=} opt_errorCallback
 * @return {!angular.$http.HttpPromise}
 */
angular.$http.HttpPromise.then = function(
    successCallback, opt_errorCallback) {};

/**
 * @param {?function(!angular.$http.Response)} callback
 * @return {!angular.$http.HttpPromise}
 */
angular.$http.HttpPromise.catch = function(callback) {};

/**
 * @param {?function(!angular.$http.Response)} callback
 * @return {!angular.$http.HttpPromise}
 */
angular.$http.HttpPromise.finally = function(callback) {};

/**
 * @param {angular.HttpCallback} callback
 * @return {!angular.$http.HttpPromise} Promise for chaining.
 */
angular.$http.HttpPromise.success = function(callback) {};

/**
 * @param {angular.HttpCallback} callback
 * @return {!angular.$http.HttpPromise} Promise for chaining.
 */
angular.$http.HttpPromise.error = function(callback) {};

/**
 * @typedef {{
 *   data: (string|Object),
 *   status: number,
 *   headers: function(string=): (string|Object),
 *   config: !angular.$http.Config
 *   }}
 */
angular.$http.Response;

/**
 * @typedef {{
 *   defaults: !angular.$http.Config
 * }}
 */
angular.$HttpProvider;

/**
 * @type {angular.$http.Config}
 */
angular.$HttpProvider.defaults;

/******************************************************************************
 * $injector Service
 *****************************************************************************/

/**
 * @typedef {{
 *   annotate: function((Function|Array.<string|Function>)):Array.<string>,
 *   get: function(string):(?),
 *   instantiate: function(Function, Object=):Object,
 *   invoke: function(
 *       (!Function|Array.<string|!Function>), Object=, Object=):(?)
 *   }}
 */
angular.$injector;

/**
 * @param {(!Function|Array.<string|!Function>)} fn
 * @return {Array.<string>}
 */
angular.$injector.annotate = function(fn) {};

/**
 * @param {string} name
 * @return {?}
 */
angular.$injector.get = function(name) {};

/**
 * @param {!Function} type
 * @param {Object=} opt_locals
 * @return {Object}
 */
angular.$injector.instantiate = function(type, opt_locals) {};

/**
 * @param {(!Function|Array.<string|!Function>)} fn
 * @param {Object=} opt_self
 * @param {Object=} opt_locals
 * @return {?}
 */
angular.$injector.invoke = function(fn, opt_self, opt_locals) {};

/******************************************************************************
 * $interpolateProvider Service
 *****************************************************************************/

/**
 * @typedef {{
 *   startSymbol: function(string),
 *   endSymbol: function(string)
 *   }}
 */
angular.$interpolateProvider;

/** @type {function(string)} */
angular.$interpolateProvider.startSymbol;

/** @type {function(string)} */
angular.$interpolateProvider.endSymbol;

/******************************************************************************
 * $location Service
 *****************************************************************************/

/**
 * @typedef {{
 *   absUrl: function():string,
 *   hash: function(string=):string,
 *   host: function():string,
 *   path: function(string=):(string|!angular.$location),
 *   port: function():number,
 *   protocol: function():string,
 *   replace: function(),
 *   search: function((string|Object.<string, string>)=,
 *       ?(string|Array.<string>)=): (!Object|angular.$location),
 *   url: function(string=):string
 *   }}
 */
angular.$location;

/**
 * @return {string}
 */
angular.$location.absUrl = function() {};

/**
 * @param {string=} opt_hash
 * @return {string}
 */
angular.$location.hash = function(opt_hash) {};

/**
 * @return {string}
 */
angular.$location.host = function() {};

/**
 * @param {string=} opt_path
 * @return {string|!angular.$location}
 */
angular.$location.path = function(opt_path) {};

/**
 * @return {number}
 */
angular.$location.port = function() {};

/**
 * @return {string}
 */
angular.$location.protocol = function() {};

/**
 * @type {function()}
 */
angular.$location.replace = function() {};

/**
 * @param {(string|Object.<string, string>)=} opt_search
 * @param {?(string|Array.<string>)=} opt_paramValue
 * @return {(!Object|angular.$location)}
 */
angular.$location.search = function(opt_search, opt_paramValue) {};

/**
 * @param {string=} opt_url
 * @return {string}
 */
angular.$location.url = function(opt_url) {};

/******************************************************************************
 * $locationProvider Service
 *****************************************************************************/

/**
 * @typedef {{
 *   hashPrefix:
 *       function(string=): (string|!angular.$locationProvider),
 *   html5Mode:
 *       function(boolean=): (boolean|!angular.$locationProvider)
 *   }}
 */
angular.$locationProvider;

/**
 * @param {string=} opt_prefix
 * @return {string|!angular.$locationProvider}
 */
angular.$locationProvider.hashPrefix = function(opt_prefix) {};

/**
 * @param {boolean=} opt_enabled
 * @return {boolean|!angular.$locationProvider}
 */
angular.$locationProvider.html5Mode = function(opt_enabled) {};

/******************************************************************************
 * $log Service
 *****************************************************************************/

/**
 * @typedef {{
 *   error: function(...[*]),
 *   info: function(...[*]),
 *   log: function(...[*]),
 *   warn: function(...[*])
 *   }}
 */
angular.$log;

/**
 * @param {...*} var_args
 */
angular.$log.error = function(var_args) {};

/**
 * @param {...*} var_args
 */
angular.$log.info = function(var_args) {};

/**
 * @param {...*} var_args
 */
angular.$log.log = function(var_args) {};

/**
 * @param {...*} var_args
 */
angular.$log.warn = function(var_args) {};

/******************************************************************************
 * NgModelController
 *****************************************************************************/

/**
 * @constructor
 */
angular.NgModelController = function() {};

/**
 * @type {?}
 */
angular.NgModelController.prototype.$modelValue;

/**
 * @type {boolean}
 */
angular.NgModelController.prototype.$dirty;

/**
 * @type {!Object.<boolean>}
 */
angular.NgModelController.prototype.$error;

/**
 * @type {!Array.<function(?):*>}
 */
angular.NgModelController.prototype.$formatters;

/**
 * @type {boolean}
 */
angular.NgModelController.prototype.$invalid;

/**
 * @type {!Array.<function(?):*>}
 */
angular.NgModelController.prototype.$parsers;

/**
 * @type {boolean}
 */
angular.NgModelController.prototype.$pristine;

angular.NgModelController.prototype.$render = function() {};

/**
 * @param {string} key
 * @param {boolean} isValid
 */
angular.NgModelController.prototype.$setValidity = function(key, isValid) {};

/**
 * @param {?} value
 */
angular.NgModelController.prototype.$setViewValue = function(value) {};

/**
 * @type {boolean}
 */
angular.NgModelController.prototype.$valid;

/**
 * @type {!Array.<function()>}
 */
angular.NgModelController.prototype.$viewChangeListeners;

/**
 * @type {?}
 */
angular.NgModelController.prototype.$viewValue;

/******************************************************************************
 * FormController
 *****************************************************************************/

/**
 * @constructor
 */
angular.FormController = function() {};

/**
 * @param {*} control
 */
angular.FormController.prototype.$addControl = function(control) {};

/**
 * @type {boolean}
 */
angular.FormController.prototype.$dirty;

/**
 * @type {!Object.<boolean>}
 */
angular.FormController.prototype.$error;

/**
 * @type {boolean}
 */
angular.FormController.prototype.$invalid;

/**
 * @type {string}
 */
angular.FormController.prototype.$name;

/**
 * @type {boolean}
 */
angular.FormController.prototype.$pristine;

/**
 * @param {*} control
 */
angular.FormController.prototype.$removeControl = function(control) {};

/**
 * @type {function()}
 */
angular.FormController.prototype.$setDirty = function() {};

/**
 * @type {function()}
 */
angular.FormController.prototype.$setPristine = function() {};

/**
 * @param {string} validationToken
 * @param {boolean} isValid
 * @param {*} control
 */
angular.FormController.prototype.$setValidity = function(
    validationToken, isValid, control) {};

/**
 * @type {boolean}
 */
angular.FormController.prototype.$valid;

/******************************************************************************
 * $parse Service
 *****************************************************************************/

/**
 * @typedef {function(string):!angular.$parse.Expression}
 */
angular.$parse;

/**
 * @typedef {function((!angular.Scope|!Object), Object=):*}
 */
angular.$parse.Expression;

/**
 * Augment the angular.$parse.Expression type definition by reopening the type
 * via an artificial angular.$parse instance.
 *
 * This allows us to define methods on function objects which is something
 * that can't be expressed via typical type annotations.
 *
 * @type {angular.$parse.Expression}
 */
angular.$parse_;

/**
 * @type {function((!angular.Scope|!Object), *)}
 */
angular.$parse_.assign = function(scope, newValue) {};

/******************************************************************************
 * $provide Service
 *****************************************************************************/

/**
 * @typedef {{
 *   constant: function(string, *): Object,
 *   decorator: function(string, (!Function|Array.<string|!Function>)),
 *   factory: function(string, (!Function|Array.<string|!Function>)): Object,
 *   provider: function(string, (!Function|Array.<string|!Function>)): Object,
 *   service: function(string, (!Function|Array.<string|!Function>)): Object,
 *   value: function(string, *): Object
 *   }}
 */
angular.$provide;

/**
 * @param {string} name
 * @param {*} object
 * @return {Object}
 */
angular.$provide.constant = function(name, object) {};

/**
 * @param {string} name
 * @param {Function|Array.<string|Function>} decorator
 */
angular.$provide.decorator = function(name, decorator) {};

/**
 * @param {string} name
 * @param {Function|Array.<string|Function>} providerFunction
 * @return {Object}
 */
angular.$provide.factory = function(name, providerFunction) {};

/**
 * @param {string} name
 * @param {Function|Array.<string|Function>} providerType
 * @return {Object}
 */
angular.$provide.provider = function(name, providerType) {};

/**
 * @param {string} name
 * @param {Function|Array.<string|Function>} constructor
 * @return {Object}
 */
angular.$provide.service = function(name, constructor) {};

/**
 * @param {string} name
 * @param {*} object
 * @return {Object}
 */
angular.$provide.value = function(name, object) {};

/******************************************************************************
 * $q Service
 *****************************************************************************/

/**
 * @typedef {{
 *   all: function((Object.<!angular.$q.Promise>|Array.<!angular.$q.Promise>)):
 *       !angular.$q.Promise,
 *   defer: function():!angular.$q.Deferred,
 *   reject: function(*):!angular.$q.Promise,
 *   when: function(*):!angular.$q.Promise
 *   }}
 */
angular.$q;

/**
 * @param {!Object.<!angular.$q.Promise>|Array.<!angular.$q.Promise>} promises
 * @return {!angular.$q.Promise}
 */
angular.$q.all = function(promises) {};

/**
 * @return {!angular.$q.Deferred}
 */
angular.$q.defer = function() {};

/**
 * @param {*} reason
 * @return {!angular.$q.Promise}
 */
angular.$q.reject = function(reason) {};

/**
 * @param {*} value
 * @return {!angular.$q.Promise}
 */
angular.$q.when = function(value) {};

/**
 * @typedef {{
 *   resolve: function(*=),
 *   reject: function(*=),
 *   notify: function(*=),
 *   promise: !angular.$q.Promise
 *   }}
 */
angular.$q.Deferred;

/** @param {*=} opt_value */
angular.$q.Deferred.resolve = function(opt_value) {};

/** @param {*=} opt_reason */
angular.$q.Deferred.reject = function(opt_reason) {};

/** @param {*=} opt_value */
angular.$q.Deferred.notify = function(opt_value) {};

/** @type {!angular.$q.Promise} */
angular.$q.Deferred.promise;

/**
 * @typedef {{
 *   then: function(?function(?), ?function(?)=, ?function(?)=):
 *       angular.$q.Promise,
 *   catch: function(?function(?)):angular.$q.Promise,
 *   finally: function(?function(?)):angular.$q.Promise
 * }}
 */
angular.$q.Promise;

/**
 * @param {?function(?)} successCallback
 * @param {?function(?)=} opt_errorCallback
 * @return {!angular.$q.Promise}
 */
angular.$q.Promise.then = function(successCallback, opt_errorCallback) {};

/**
 * @param {?function(?)} callback
 * @return {!angular.$q.Promise}
 */
angular.$q.Promise.catch = function(callback) {};

/**
 * @param {?function(?)} callback
 * @return {!angular.$q.Promise}
 */
angular.$q.Promise.finally = function(callback) {};

/******************************************************************************
 * $route Service
 *****************************************************************************/

/**
 * @typedef {{
 *   reload: function(),
 *   current: !angular.$route.Route,
 *   routes: Array.<!angular.$route.Route>
 * }}
 */
angular.$route;

/** @type {function()} */
angular.$route.reload = function() {};

/** @type {!angular.$route.Route} */
angular.$route.current;

/** @type {Array.<!angular.$route.Route>} */
angular.$route.routes;

/**
 * @typedef {{
 *   $route: angular.$routeProvider.Params,
 *   locals: Object.<string, *>,
 *   params: Object.<string, string>,
 *   pathParams: Object.<string, string>,
 *   scope: Object.<string, *>,
 *   originalPath: (string|undefined),
 *   regexp: (RegExp|undefined)
 * }}
 */
angular.$route.Route;

/** @type {angular.$routeProvider.Params} */
angular.$route.Route.$route;

/** @type {Object.<string, *>} */
angular.$route.Route.locals;

/** @type {Object.<string, string>} */
angular.$route.Route.params;

/** @type {Object.<string, string>} */
angular.$route.Route.pathParams;

/** @type {Object.<string, *>} */
angular.$route.Route.scope;

/** @type {string|undefined} */
angular.$route.Route.originalPath;

/** @type {RegExp|undefined} */
angular.$route.Route.regexp;

/******************************************************************************
 * $routeProvider Service
 *****************************************************************************/

/**
 * @typedef {{
 *   otherwise:
 *       function(angular.$routeProvider.Params): !angular.$routeProvider,
 *   when:
 *       function(
 *           string, angular.$routeProvider.Params): !angular.$routeProvider
 *   }}
 */
angular.$routeProvider;

/**
 * @param {angular.$routeProvider.Params} params
 * @return {!angular.$routeProvider}
 */
angular.$routeProvider.otherwise = function(params) {};

/**
 * @param {string} path
 * @param {angular.$routeProvider.Params} route
 * @return {!angular.$routeProvider}
 */
angular.$routeProvider.when = function(path, route) {};

/**
 * @typedef {{
 *   controller: (Function|Array.<string|Function>|string|undefined),
 *   template: (string|undefined),
 *   templateUrl: (string|function(!Object.<string,string>=)|undefined),
 *   resolve: (Object.<string, (
 *       string|Function|Array.<string|Function>|!angular.$q.Promise
 *       )>|undefined),
 *   redirectTo: (
 *       string|function(Object.<string>, string, Object): string|undefined),
 *   reloadOnSearch: (boolean|undefined)
 *   }}
 */
angular.$routeProvider.Params;

/** @type {Function|Array.<string|Function>|string} */
angular.$routeProvider.Params.controller;

/** @type {string} */
angular.$routeProvider.Params.template;

/** @type {string|function(!Object.<string,string>=)} */
angular.$routeProvider.Params.templateUrl;

/**
 * @type {
 *   Object.<string, (
 *       string|Function|Array.<string|Function>|!angular.$q.Promise
 *       )>}
 */
angular.$routeProvider.Params.resolve;

/** @type {string|function(Object.<string>, string, Object): string} */
angular.$routeProvider.Params.redirectTo;

/** @type {boolean} */
angular.$routeProvider.Params.reloadOnSearch;

/******************************************************************************
 * $sanitize Service
 *****************************************************************************/

/** @typedef {function(string):string} */
angular.$sanitize;

/******************************************************************************
 * $sce Service
 *****************************************************************************/

/**
 * Ref: http://docs.angularjs.org/api/ng.$sce
 *
 * @typedef {{
 *   HTML: string,
 *   CSS: string,
 *   URL: string,
 *   JS: string,
 *   RESOURCE_URL: string,
 *   isEnabled: function(): boolean,
 *   parseAs: function(string, string): !angular.$parse.Expression,
 *   getTrusted: function(string, *): string,
 *   trustAs: function(string, string): *,
 *   parseAsHtml: function(string): !angular.$parse.Expression,
 *   parseAsCss: function(string): !angular.$parse.Expression,
 *   parseAsUrl: function(string): !angular.$parse.Expression,
 *   parseAsJs: function(string): !angular.$parse.Expression,
 *   parseAsResourceUrl: function(string): !angular.$parse.Expression,
 *   getTrustedHtml: function(*): string,
 *   getTrustedCss: function(*): string,
 *   getTrustedUrl: function(*): string,
 *   getTrustedJs: function(*): string,
 *   getTrustedResourceUrl: function(*): string,
 *   trustAsHtml: function(string): *,
 *   trustAsCss: function(string): *,
 *   trustAsUrl: function(string): *,
 *   trustAsJs: function(string): *,
 *   trustAsResourceUrl: function(string): *
 *   }}
 *****************************************************************************/
angular.$sce;


/** @const {string} */
angular.$sce.HTML;

/** @const {string} */
angular.$sce.CSS;

/** @const {string} */
angular.$sce.URL;

/** @const {string} */
angular.$sce.JS;

/** @const {string} */
angular.$sce.RESOURCE_URL;

/** @return {boolean} */
angular.$sce.isEnabled = function() {};

/**
 * @param {string} type
 * @param {string} expression
 * @return {!angular.$parse.Expression}
 */
angular.$sce.parseAs = function(type, expression) {};

/**
 * @param {string} type
 * @param {*} maybeTrusted
 * @return {string}
 */
angular.$sce.getTrusted = function(type, maybeTrusted) {};

/**
 * @param {string} type
 * @param {string} trustedValue
 * @return {*}
 */
angular.$sce.trustAs = function(type, trustedValue) {};

/**
 * @param {string} expression
 * @return {!angular.$parse.Expression}
 */
angular.$sce.parseAsHtml = function(expression) {};

/**
 * @param {string} expression
 * @return {!angular.$parse.Expression}
 */
angular.$sce.parseAsCss = function(expression) {};

/**
 * @param {string} expression
 * @return {!angular.$parse.Expression}
 */
angular.$sce.parseAsUrl = function(expression) {};

/**
 * @param {string} expression
 * @return {!angular.$parse.Expression}
 */
angular.$sce.parseAsJs = function(expression) {};

/**
 * @param {string} expression
 * @return {!angular.$parse.Expression}
 */
angular.$sce.parseAsResourceUrl = function(expression) {};

/**
 * @param {*} maybeTrusted
 * @return {string}
 */
angular.$sce.getTrustedHtml = function(maybeTrusted) {};

/**
 * @param {*} maybeTrusted
 * @return {string}
 */
angular.$sce.getTrustedCss = function(maybeTrusted) {};

/**
 * @param {*} maybeTrusted
 * @return {string}
 */
angular.$sce.getTrustedUrl = function(maybeTrusted) {};

/**
 * @param {*} maybeTrusted
 * @return {string}
 */
angular.$sce.getTrustedJs = function(maybeTrusted) {};

/**
 * @param {*} maybeTrusted
 * @return {string}
 */
angular.$sce.getTrustedResourceUrl = function(maybeTrusted) {};

/**
 * @param {string} trustedValue
 * @return {*}
 */
angular.$sce.trustAsHtml = function(trustedValue) {};

/**
 * @param {string} trustedValue
 * @return {*}
 */
angular.$sce.trustAsCss = function(trustedValue) {};

/**
 * @param {string} trustedValue
 * @return {*}
 */
angular.$sce.trustAsUrl = function(trustedValue) {};

/**
 * @param {string} trustedValue
 * @return {*}
 */
angular.$sce.trustAsJs = function(trustedValue) {};

/**
 * @param {string} trustedValue
 * @return {*}
 */
angular.$sce.trustAsResourceUrl = function(trustedValue) {};

/******************************************************************************
 * $sceDelegate Service
 *****************************************************************************/

/**
 * Ref: http://docs.angularjs.org/api/ng/service/$sceDelegate
 *
 * @constructor
 */
angular.$sceDelegate = function() {};

/**
 * @param {string} type
 * @param {*} value
 * @return {*}
 */
angular.$sceDelegate.prototype.trustAs = function(type, value) {};

/**
 * Note: because this method overrides Object.prototype.valueOf, the value
 * parameter needs to be annotated as optional to keep the compiler happy (as
 * otherwise the signature won't match Object.prototype.valueOf).
 *
 * @override
 * @param {*=} value
 * @return {*}
 */
angular.$sceDelegate.prototype.valueOf = function(value) {};

/**
 * @param {string} type
 * @param {*} maybeTrusted
 * @return {*}
 */
angular.$sceDelegate.prototype.getTrusted = function(type, maybeTrusted) {};

/******************************************************************************
 * $sceDelegateProvider Service
 *****************************************************************************/

/**
 * Ref: http://docs.angularjs.org/api/ng/provider/$sceDelegateProvider
 *
 * @constructor
 */
angular.$sceDelegateProvider = function() {};

/**
 * @param {Array.<string>=} opt_whitelist
 * @return {!Array.<string>}
 */
angular.$sceDelegateProvider.prototype.resourceUrlWhitelist = function(
    opt_whitelist) {};

/**
 * @param {Array.<string>=} opt_blacklist
 * @return {!Array.<string>}
 */
angular.$sceDelegateProvider.prototype.resourceUrlBlacklist = function(
    opt_blacklist) {};

/******************************************************************************
 * $templateCache Service
 *****************************************************************************/

/**
 * @typedef {!angular.$cacheFactory.Cache.<string>}
 */
angular.$templateCache;

/******************************************************************************
 * $timeout Service
 *****************************************************************************/

/**
 * @typedef {function(function(), number=, boolean=):!angular.$q.Promise}
 */
angular.$timeout;

/**
 * Augment the angular.$timeout type definition by reopening the type via an
 * artificial angular.$timeout instance.
 *
 * This allows us to define methods on function objects which is something
 * that can't be expressed via typical type annotations.
 *
 * @type {angular.$timeout}
 */
angular.$timeout_;

/**
 * @type {function(!angular.$q.Promise):boolean}
 */
angular.$timeout_.cancel = function(promise) {};
