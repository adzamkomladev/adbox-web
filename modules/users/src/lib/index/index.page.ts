import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { User } from '@adbox/shared/data-access';

import { UsersTable } from "./tables/users.table";


@Component({
  standalone: true,
  templateUrl: './index.page.html',
  styles: ``,
  imports: [CommonModule, UsersTable]
})
export class IndexPage {
  selectedUser = signal<User | null>(null);

  async onSelected(data: User) {
    this.selectedUser.set(data);
  }

}
