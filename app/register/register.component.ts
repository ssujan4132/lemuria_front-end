import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {provideForms} from "@angular/forms";
import {RegisterModel} from "./register.model";


@Component({
    selector: 'register',
    templateUrl: 'app/register/register.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers : [provideForms(),RegisterModel]
})

export class RegisterComponent {

    constructor(public registerModel : RegisterModel){

    }

    submit(){
        alert(JSON.stringify(this.registerModel));
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.registerModel); }
}
