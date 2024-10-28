import { Component } from '@angular/core';
import { UserService, User } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
})
export class CreateUserComponent {
  user: User = { firstName: '', lastName: '', email: '' };
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(): void {
    this.userService.createUser(this.user).subscribe({
      next: () => this.router.navigate(['/users']),
      error: (err) => (this.errorMessage = err.error.message),
    });
  }
}
