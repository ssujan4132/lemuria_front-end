"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var http_service_1 = require("../service/http.service");
var base_api_1 = require("./base.api");
var RegisterApi = (function (_super) {
    __extends(RegisterApi, _super);
    function RegisterApi(_httpService) {
        _super.call(this);
        this._httpService = _httpService;
    }
    RegisterApi.prototype.registerUser = function (data) {
        var _this = this;
        var requestOptionsArgs = this.postRequestOptionsArgs('http://localhost:5000/register', data);
        return this._httpService.postPromise(requestOptionsArgs)
            .then(function (resp) { return _this.validateResponse(resp, 0); });
    };
    RegisterApi = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], RegisterApi);
    return RegisterApi;
}(base_api_1.BaseApi));
exports.RegisterApi = RegisterApi;
//# sourceMappingURL=register.api.js.map