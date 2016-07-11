import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {HttpService} from "./common/service/http.service";
import {HTTP_PROVIDERS} from "@angular/http";


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives : [ROUTER_DIRECTIVES,HeaderComponent,FooterComponent],
    providers : [HTTP_PROVIDERS,HttpService]

})



export class AppComponent { }
