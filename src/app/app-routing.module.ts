import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'header', component: HeaderComponent },
    { path: 'signup', component: FormComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
];


@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}