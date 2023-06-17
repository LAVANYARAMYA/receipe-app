import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-basic-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class BasicComponent {
  // nameForm = new FormGroup({
  //   username: new FormControl('', Validators.required),
  //   age: new FormControl('', [Validators.required, Validators.min(18)]),
  // });

  nameForm = this.fb.group({
    username: ['', Validators.required],
    age: ['', [Validators.required, Validators.min(18)]],
  });

  // Dependency Injection
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    // console.log(this.nameForm.get('username')?.value);
    console.log(this.nameForm.status);

    if (this.nameForm.invalid) {
      console.log(
        'Try again',
        this.nameForm.get('username')?.errors,
        this.nameForm.get('age')?.errors
      );
    } else {
      console.log(this.nameForm.value);
    }
  }

  get username() {
    return this.nameForm.get('username');
  }

  get age() {
    return this.nameForm.get('age');
  }
}
