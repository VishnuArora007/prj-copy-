import {Component} from '@angular/core';
import {Form} from './form';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {
    selectedValue: string = '';
    genders: any = ['Male', 'Female'];
    radioChangeHandler (event: any){
        this.selectedValue = event.target.value;
    }
    states = ['--Select--', 'Punjab', 'Himachal Pardesh',
        'Chandigarh', 'Haryana'];

    model = new Form('', '', this.states[0]);

    submitted = false;

    name = 'checkbox';
    student = false;
    other = false;

    onSubmit() {
        this.submitted = true;
    }
    showFormControls(form: any) {
        return form && form.controls['name'] &&
            form.controls['name'].value;
    }



}

