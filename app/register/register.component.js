"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var register_model_1 = require("./register.model");
var register_api_1 = require("../common/api/register.api");
var RegisterComponent = (function () {
    function RegisterComponent(registerModel, _registerApi) {
        this.registerModel = registerModel;
        this._registerApi = _registerApi;
    }
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        this._registerApi.registerUser(this.registerModel)
            .then(function (resp) { return _this.onRegisterUser(resp); })
            .catch(function (error) { return _this.onError(error); });
    };
    Object.defineProperty(RegisterComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.registerModel); },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onRegisterUser = function (resp) {
        console.log(resp);
    };
    RegisterComponent.prototype.onError = function (error) {
        console.log(error);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register',
            templateUrl: 'app/register/register.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [forms_1.provideForms(), register_model_1.RegisterModel, register_api_1.RegisterApi]
        }), 
        __metadata('design:paramtypes', [register_model_1.RegisterModel, register_api_1.RegisterApi])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map