import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent {
  
  dynamicForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dynamicForm = this.fb.group({
      users: this.fb.array([]) 
    });
  }

  addUser() {
    const userControl = this.fb.group({
      email: ['', Validators.required] 
    });
    this.users.push(userControl);
  }

  removeUser(index: number) {
    this.users.removeAt(index);
  }

  get users() {
    return (this.dynamicForm.get('users') as FormArray);
  }
  
}
