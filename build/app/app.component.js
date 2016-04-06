System.register(['angular2/core', '../service/wakanda'], function(exports_1, context_1) {
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
    var core_1, wakanda_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (wakanda_1_1) {
                wakanda_1 = wakanda_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_wakanda) {
                    this._wakanda = _wakanda;
                }
                AppComponent.prototype.add = function () {
                    var _this = this;
                    if (this.newTask) {
                        this._wakanda.catalog.then(function (c) {
                            var Task = c['Task'];
                            var nt = Task.create({
                                label: _this.newTask,
                                done: false
                            });
                            nt.save().then(function () {
                                _this.refreshTasks();
                                _this.newTask = null;
                            });
                        });
                    }
                };
                AppComponent.prototype.prev = function () {
                    this.tasks.prevPage();
                };
                AppComponent.prototype.next = function () {
                    this.tasks.nextPage();
                };
                AppComponent.prototype.refreshTasks = function () {
                    var _this = this;
                    this._wakanda.catalog.then(function (c) {
                        var Task = c['Task'];
                        Task.query({ pageSize: 3 }).then(function (collection) {
                            _this.tasks = collection;
                            console.log(collection);
                        });
                    });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.refreshTasks();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/app/template.html',
                        providers: [wakanda_1.Wakanda]
                    }), 
                    __metadata('design:paramtypes', [wakanda_1.Wakanda])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map