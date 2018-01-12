import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {FormService} from './form.service';
import {DropdownDirective} from './shared/dropdown.directive';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
    declarations: [
     FormComponent,
      AppComponent,
      HeaderComponent,
      LoginComponent,
      HomeComponent,
      DropdownDirective
  ],
    imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
    ],
  providers: [FormService],
  bootstrap: [AppComponent],
   })
export class AppModule { }
