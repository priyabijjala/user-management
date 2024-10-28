// src/app/app.module.ts
import { NgModule } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './app/components/user-list/user-list.component';
import { CreateUserComponent } from './app/components/create-user/create-user.component';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { UserModule } from './app/user/user.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  // declarations, providers, bootstrap
})
export class AppModule { }
