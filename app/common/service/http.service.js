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
require('rxjs/Rx');
var Observable_1 = require("rxjs/Observable");
var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.get = function (requestOptionsArgs) {
        var _this = this;
        // url can be left empty '', but just for consistency it is being added.
        return this._http.get(requestOptionsArgs.url, requestOptionsArgs)
            .map(function (res) {
            console.log(res);
            try {
                return res.json().results;
            }
            catch (error) {
                var errorObj = {
                    error: res._body
                };
                throw new Error(JSON.stringify(errorObj));
            }
        })
            .catch(function (err) { return _this.errorHandler(err); });
    };
    HttpService.prototype.errorHandler = function (err) {
        try {
            return Observable_1.Observable.throw(err.json());
        }
        catch (error) {
            var errObj = JSON.parse(err.message);
            return Observable_1.Observable.throw(errObj);
        }
    };
    HttpService.prototype.post = function (requestOptionsArgs) {
        var _this = this;
        // url and body can be left empty '', but just for consistency it is being added.
        return this._http.post(requestOptionsArgs.url, requestOptionsArgs.body, requestOptionsArgs)
            .map(function (res) {
            console.log(res);
            try {
                return res.json().results;
            }
            catch (error) {
                var errorObj = {
                    error: res._body
                };
                throw new Error(JSON.stringify(errorObj));
            }
        })
            .catch(function (err) { return _this.errorHandler(err); });
    };
    HttpService.prototype.put = function (requestOptionsArgs) {
        var _this = this;
        // url and body can be left empty '', but just for consistency it is being added.
        return this._http.put(requestOptionsArgs.url, requestOptionsArgs.body, requestOptionsArgs)
            .map(function (res) {
            console.log(res);
            try {
                return res.json().results;
            }
            catch (error) {
                var errorObj = {
                    error: res._body
                };
                throw new Error(JSON.stringify(errorObj));
            }
        })
            .catch(function (err) { return _this.errorHandler(err); });
    };
    HttpService.prototype.delete = function (requestOptionsArgs) {
        var _this = this;
        // url and body can be left empty '', but just for consistency it is being added.
        return this._http.delete(requestOptionsArgs.url, requestOptionsArgs)
            .map(function (res) {
            console.log(res);
            try {
                return res.json().results;
            }
            catch (error) {
                var errorObj = {
                    error: res._body
                };
                throw new Error(JSON.stringify(errorObj));
            }
        })
            .catch(function (err) { return _this.errorHandler(err); });
    };
    HttpService.prototype.getPromise = function (requestOptionsArgs) {
        var _this = this;
        // url can be left empty '', but just for consistency it is being added.
        return this._http.get(requestOptionsArgs.url, requestOptionsArgs)
            .toPromise()
            .then(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    HttpService.prototype.postPromise = function (requestOptionsArgs) {
        var _this = this;
        return this._http.post(requestOptionsArgs.url, requestOptionsArgs.body, requestOptionsArgs)
            .toPromise()
            .then(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    HttpService.prototype.putPromise = function (requestOptionsArgs) {
        var _this = this;
        return this._http.put(requestOptionsArgs.url, requestOptionsArgs.body, requestOptionsArgs)
            .toPromise()
            .then(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    HttpService.prototype.deletePromise = function (requestOptionsArgs) {
        var _this = this;
        return this._http.delete(requestOptionsArgs.url, requestOptionsArgs)
            .toPromise()
            .then(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    HttpService.prototype.extractData = function (res) {
        console.log(res);
        var data = res.json();
        return new Promise(function (resolve, reject) {
            //let tempData = <any>data;
            // if(tempData.code == 901 || tempData.code == 902)
            //     throw new Error(tempData.code.toString());
            // else
            resolve(data);
        });
    };
    HttpService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map