// src/app/user/user.module.ts (if you have a feature module)
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Make sure this is imported
import { CreateUserComponent } from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    CreateUserComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, // Ensure FormsModule is included here
  ],
  exports: [
    CreateUserComponent,
    UserListComponent,
  ]
})
export class UserModule {}
