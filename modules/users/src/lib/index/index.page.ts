import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { User } from '@adbox/shared/data-access';

import { UsersTable } from "./tables/users.table";
import { UserAction } from './types/page.type';


@Component({
  standalone: true,
  templateUrl: './index.page.html',
  styles: ``,
  imports: [CommonModule, UsersTable]
})
export class IndexPage {
  selectedUser = signal<User | null>(null);
  userAction = signal<UserAction | null>(null);
  isSidebarOpen = signal<boolean>(false);

  async onSelected(data: User) {
    this.selectedUser.set(data);
    this.userAction.set('select');
    this.isSidebarOpen.set(true);
  }

  async onAdd() {
    this.userAction.set('create');
    this.isSidebarOpen.set(true);
  }

  onClose() {
    this.selectedUser.set(null);
    this.isSidebarOpen.set(false);
  }
}
