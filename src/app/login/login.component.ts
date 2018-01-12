import { Component } from '@angular/core';
import {Form} from '../form/form';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {
    constructor(private loginService: LoginService) {}
    submitted = false;

    model = new Form('', '', '');

    onSubmit() {
        this.submitted = true;

    }
}