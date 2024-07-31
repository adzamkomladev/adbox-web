import {Component, effect, inject, input, model} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Role, User, UsersService} from '@adbox/shared/data-access';
import {StatusForm} from '../forms/status.form';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'adbox-user-details',
  standalone: true,
  imports: [CommonModule, StatusForm, FormsModule],
  templateUrl: './details.component.html',
  styles: ``,
})
export class DetailsComponent {
  loading = false;
  success = false;
  message?: string | null;

  user = input.required<User>();
  userService = inject(UsersService);




  onSubmit(id:string) {
    this.loading = true;

    this.userService
      // .updateUserStatus('32c64820-a820-4f13-b6f7-90bc0de0fda2', 'inactive')
      .updateUserStatus(id, 'inactive')
      .subscribe({
        next: async (resp) => {
          console.log(id);
          this.loading=false
          
        },

        error: (e: Error) => {
          console.log(e.message);
          this.loading=false;
        },
      });
  }

  constructor() {
    effect(() => {
      // TODO: Call endpoint to get full user information such as personal details, latest activities etc.
    });
  }

  onClose() {}
}
