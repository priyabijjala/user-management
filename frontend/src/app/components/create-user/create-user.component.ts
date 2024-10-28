// // src/app/components/create-user/create-user.component.ts
// import { Component, NgModule } from '@angular/core';
// import {FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { UserService } from '../../services/user.service';
// import { User } from '../../models/user.model';

// @Component({
//   selector: 'app-create-user',
//   templateUrl: './create-user.component.html',
//   styleUrls: ['./create-user.component.css']
// })

// export class CreateUserComponent {
//   userForm: FormGroup;

//   constructor(private fb: FormBuilder, private userService: UserService) {
//     this.userForm = this.fb.group({
//       firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(100)]],
//       lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(100)]],
//       email: ['', [Validators.required, Validators.email]],
//     });
//   }

//   onSubmit(): void {
//     console.log("hi");
//     if (this.userForm.valid) {
//       const user: User = this.userForm.value;
//       this.userService.addUser(user);
//       this.userForm.reset();
//     }
//   }
// }
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$'), Validators.maxLength(100)]],
      lastName: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$'), Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.userService.createUser(this.userForm.value).subscribe();
    }
  }
}
