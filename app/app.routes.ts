import { provideRouter, RouterConfig }  from '@angular/router';
import {HeroComponent} from "./hero/hero.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

export const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'hero',
        component: HeroComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */