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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var BaseApi = (function () {
    function BaseApi() {
    }
    BaseApi.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        //headers.append('X-authorization', this._authService.getData(APP.access_token));
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    BaseApi.prototype.postRequestOptionsArgs = function (url, data) {
        var body = JSON.stringify(data);
        var requestOptionsArgs = {
            method: http_1.RequestMethod.Post,
            headers: this.getHeaders(),
            body: body,
            url: url
        };
        return requestOptionsArgs;
    };
    BaseApi.prototype.validateResponse = function (resp, code) {
        return new Promise(function (resolve, reject) {
            if (resp.code == code)
                resolve(resp);
            else
                reject(resp.message);
        });
    };
    BaseApi = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BaseApi);
    return BaseApi;
}());
exports.BaseApi = BaseApi;
//# sourceMappingURL=base.api.js.map