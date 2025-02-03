import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Status, UsersService } from '@adbox/shared/data-access';

@Component({
    selector: 'adbox-user-status-update-form',
    imports: [CommonModule, FormsModule],
    template: `
  <select [ngModel]="status()" (ngModelChange)="onChangeStatus($event)"  class="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
    @for(status of statuses; track $index;) {
      <option [value]="status" >{{ status | titlecase }}</option>
    }
  </select>
`,
    styles: ``
})
export class StatusForm {
  private usersService = inject(UsersService);
  status = input.required<string>();
  id = input.required<string>();

  statuses = ['active', 'inactive'];

  onChangeStatus(data: string) {
    console.log(data, 'on status changed');

    this.usersService.updateStatus(this.id(), { status: data as Status }).subscribe();
    // TODO: Make call to api to change status
  }

}
