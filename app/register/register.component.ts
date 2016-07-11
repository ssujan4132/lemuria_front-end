import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {provideForms} from "@angular/forms";
import {RegisterModel} from "./register.model";
import {RegisterApi} from "../common/api/register.api";


@Component({
    selector: 'register',
    templateUrl: 'app/register/register.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers : [provideForms(),RegisterModel,RegisterApi]
})

export class RegisterComponent {

    constructor(public registerModel : RegisterModel,
                private _registerApi : RegisterApi){

    }

    submit(){
        this._registerApi.registerUser(this.registerModel)
            .then(resp => this.onRegisterUser(resp))
            .catch(error => this.onError(error))
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.registerModel); }

    private onRegisterUser(resp:any) {
        console.log(resp);
    }

    private onError(error:any) {
        console.log(error)
    }
}
