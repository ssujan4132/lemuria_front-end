import {Injectable} from "@angular/core";
import {Headers, URLSearchParams, RequestOptionsArgs, RequestMethod} from "@angular/http";
import {HttpService} from "../service/http.service";
import {BaseApi} from "./base.api";

@Injectable()
export class RegisterApi extends BaseApi{

    constructor(private _httpService : HttpService){
        super();
    }

    registerUser(data): Promise<any> {
        let requestOptionsArgs = this.postRequestOptionsArgs('http://localhost:5000/register',data);
        return this._httpService.postPromise(requestOptionsArgs)
            .then(resp => this.validateResponse(resp,0));
    }
}