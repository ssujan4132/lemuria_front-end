import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptionsArgs, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class HttpService {

    constructor(private _http:Http) {
    }

    get<T>(requestOptionsArgs : RequestOptionsArgs) : Observable<T>{
        // url can be left empty '', but just for consistency it is being added.
        return this._http.get(requestOptionsArgs.url,requestOptionsArgs)
            .map(res => {
                console.log(res);
                try {
                    return <T>res.json().results;
                }catch (error) {
                    let errorObj = {
                        error : res._body
                    }
                    throw new Error(JSON.stringify(errorObj));
                }
            })
            .catch(err => this.errorHandler(err))
    }

    errorHandler(err){
        try{
            return Observable.throw(err.json());
        }catch(error){
            var errObj = JSON.parse(err.message);
            return Observable.throw(errObj);
        }
    }

    post<T>(requestOptionsArgs : RequestOptionsArgs) : Observable<T>{
        // url and body can be left empty '', but just for consistency it is being added.
        return this._http.post(requestOptionsArgs.url,requestOptionsArgs.body,requestOptionsArgs)
            .map(res => {
                console.log(res);
                try {
                    return <T>res.json().results;
                }catch (error) {
                    let errorObj = {
                        error : res._body
                    }
                    throw new Error(JSON.stringify(errorObj));
                }
            })
            .catch(err => this.errorHandler(err));
    }

    put<T>(requestOptionsArgs : RequestOptionsArgs) : Observable<T>{
        // url and body can be left empty '', but just for consistency it is being added.
        return this._http.put(requestOptionsArgs.url,requestOptionsArgs.body,requestOptionsArgs)
            .map(res => {
                console.log(res);
                try {
                    return <T>res.json().results;
                }catch (error) {
                    let errorObj = {
                        error : res._body
                    }
                    throw new Error(JSON.stringify(errorObj));
                }
            })
            .catch(err => this.errorHandler(err));
    }
    
    delete<T>(requestOptionsArgs : RequestOptionsArgs) : Observable<T>{
        // url and body can be left empty '', but just for consistency it is being added.
        return this._http.delete(requestOptionsArgs.url,requestOptionsArgs)
            .map(res => {
                console.log(res);
                try {
                    return <T>res.json().results;
                }catch (error) {
                    let errorObj = {
                        error : res._body
                    }
                    throw new Error(JSON.stringify(errorObj));
                }
            })
            .catch(err => this.errorHandler(err));
    }

    getPromise<T>(requestOptionsArgs:RequestOptionsArgs):Promise<T> {
        // url can be left empty '', but just for consistency it is being added.
        return this._http.get(requestOptionsArgs.url, requestOptionsArgs)
            .toPromise()
            .then(res => this.extractData<T>(res))
            .catch(this.handleError)
    }

    postPromise(requestOptionsArgs:RequestOptionsArgs):Promise<any>{
        return this._http.post(requestOptionsArgs.url,requestOptionsArgs.body,requestOptionsArgs)
            .toPromise()
            .then(res => this.extractData(res))
            .catch(this.handleError)
    }

    putPromise<T>(requestOptionsArgs:RequestOptionsArgs):Promise<T> {
        return this._http.put(requestOptionsArgs.url,requestOptionsArgs.body,requestOptionsArgs)
            .toPromise()
            .then(res => this.extractData<T>(res))
            .catch(this.handleError)
    }
    
    deletePromise<T>(requestOptionsArgs:RequestOptionsArgs):Promise<T> {
        return this._http.delete(requestOptionsArgs.url,requestOptionsArgs)
            .toPromise()
            .then(res => this.extractData<T>(res))
            .catch(this.handleError)
    }

    extractData(res:Response) {
        console.log(res);
        let data = res.json();
        return new Promise(function (resolve, reject) {
            //let tempData = <any>data;
            // if(tempData.code == 901 || tempData.code == 902)
            //     throw new Error(tempData.code.toString());
            // else
                resolve(data);
        });
    }

    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    }
}