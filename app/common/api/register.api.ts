import {Injectable} from "@angular/core";
import {Headers, URLSearchParams, RequestOptionsArgs, RequestMethod} from "@angular/http";
import {HttpService} from "../service/http.service";

@Injectable()
export class RegisterApi{

    constructor(private _httpService : HttpService){}

    registerUser(data): Promise<any> {

        let headers:Headers = new Headers();
        //headers.append('X-authorization', this._authService.getData(APP.access_token));
        headers.append('Content-Type', 'application/json');

        let body : string = JSON.stringify(data);

        let requestOptionsArgs:RequestOptionsArgs = {
            method: RequestMethod.Get,
            headers: headers,
            body : body,
            url: 'http://www.google.com'
        };

        return this._httpService.postPromise(requestOptionsArgs);
    }

}