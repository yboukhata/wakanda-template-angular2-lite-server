System.register(['wakanda-client/browser/no-promise'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var no_promise_1;
    var Wakanda;
    return {
        setters:[
            function (no_promise_1_1) {
                no_promise_1 = no_promise_1_1;
            }],
        execute: function() {
            Wakanda = (function () {
                function Wakanda() {
                    // this._client = new WakandaClient('http://127.0.0.1:8081');
                    this._client = new no_promise_1.default();
                    this._catalog = null;
                }
                Object.defineProperty(Wakanda.prototype, "catalog", {
                    get: function () {
                        var _this = this;
                        if (!this._catalog) {
                            return this._client.getCatalog().then(function (c) {
                                _this._catalog = c;
                                return c;
                            });
                        }
                        return Promise.resolve(this._catalog);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Wakanda.prototype, "directory", {
                    get: function () {
                        return this._client.directory;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Wakanda;
            }());
            exports_1("Wakanda", Wakanda);
        }
    }
});
//# sourceMappingURL=wakanda.js.map