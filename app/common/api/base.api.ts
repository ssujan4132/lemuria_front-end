import {Injectable} from "@angular/core";
import {Headers, URLSearchParams, RequestOptionsArgs, RequestMethod} from "@angular/http";

@Injectable()
export class BaseApi{

    protected getHeaders(){
        let headers:Headers = new Headers();
        //headers.append('X-authorization', this._authService.getData(APP.access_token));
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    protected postRequestOptionsArgs(url,data){
        let body : string = JSON.stringify(data);
        
        let requestOptionsArgs:RequestOptionsArgs = {
            method: RequestMethod.Post,
            headers: this.getHeaders(),
            body : body,
            url: url
        };

        return requestOptionsArgs;
    }

    protected validateResponse(resp:any,code) {
        return new Promise(function (resolve, reject) {
            if(resp.code == code)
                resolve(resp);
            else
                reject(resp.message);
        });
    }

}