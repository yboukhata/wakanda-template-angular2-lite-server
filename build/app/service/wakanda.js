System.register(['wakanda-client/browser'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1;
    var Wakanda;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            Wakanda = (function () {
                function Wakanda() {
                    console.log('WakandaClient', browser_1.default);
                    this._client = new browser_1.default('http://localhost:8081');
                    console.log('this._client', this._client);
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