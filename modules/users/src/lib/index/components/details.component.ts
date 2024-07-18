import { Component, effect, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '@adbox/shared/data-access';
import { StatusForm } from "../forms/status.form";

@Component({
  selector: 'adbox-user-details',
  standalone: true,
  imports: [CommonModule, StatusForm],
  templateUrl: './details.component.html',
  styles: ``,
})
export class DetailsComponent {
  user = input.required<User>();

  constructor() {
    effect(() => {
      // TODO: Call endpoint to get full user information such as personal details, latest activities etc.
    });
  }




}
