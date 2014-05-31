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
