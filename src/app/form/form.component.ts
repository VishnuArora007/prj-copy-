import {Component} from '@angular/core';
import {Form} from './form';
import {FormService} from '../form.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    providers: [FormService]
})
export class FormComponent {
    constructor(private formService: FormService){}
    states = ['--Select--', 'Punjab', 'Himachal Pardesh',
        'Chandigarh', 'Haryana'];

    selectedValue: string = '';
    genders: any = ['Male', 'Female'];
    radioChangeHandler (event: any){
        this.selectedValue = event.target.value;
    }

    model = new Form('', '', this.states[0]);

    submitted = false;

    name = 'checkbox';
    student = false;
    other = false;

    onSubmit() {
        this.submitted = true;
    }

}

