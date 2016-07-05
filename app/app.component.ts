import { Component } from '@angular/core';
import {RouterConfig, provideRouter} from "@angular/router";
import {HeroComponent} from "./hero/hero.component";
import {ROUTER_DIRECTIVES} from "@angular/router";


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives : [ROUTER_DIRECTIVES]
})



export class AppComponent { }
