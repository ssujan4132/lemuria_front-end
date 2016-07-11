"use strict";
var router_1 = require('@angular/router');
var hero_component_1 = require("./hero/hero.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var register_component_1 = require("./register/register.component");
exports.routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'hero',
        component: hero_component_1.HeroComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 
//# sourceMappingURL=app.routes.js.map