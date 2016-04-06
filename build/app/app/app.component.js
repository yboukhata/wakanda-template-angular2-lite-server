System.register(['angular2/core', 'wakanda-client/browser'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    console.log('constructed');
                    var client = new browser_1.default('http://localhost:8081');
                    client.getCatalog();
                    // console.log('client', client);    
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log('on init');
                    this.tasks = [
                        {
                            label: 'foo'
                        },
                        {
                            label: 'bar'
                        }
                    ];
                    setTimeout(function () {
                        _this.tasks = [
                            {
                                label: 'new1'
                            },
                            {
                                label: 'new2'
                            }
                        ];
                        console.log('new tasks', _this.tasks);
                    }, 200);
                    // this._wakanda.catalog.then(c => {
                    //   console.log(c);
                    //   let Task = c['Task'];
                    //   Task.query().then(collection => {
                    //     this.tasks = collection.entities;
                    //     console.log(collection);
                    //   });
                    // });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/app/template.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map