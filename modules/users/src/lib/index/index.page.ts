import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { User } from '@adbox/shared/data-access';
import { ModalService, ModalComponent, SidebarComponent, SidebarService } from '@adbox/shared/ui';

import { UserAction } from './types/page.type';

import { UsersTable } from "./tables/users.table";
import { CreateForm } from "./forms/create/create.form";
import { DetailsComponent } from "./components/details.component";


@Component({
    templateUrl: './index.page.html',
    styles: ``,
    imports: [CommonModule, SidebarComponent, UsersTable, CreateForm, ModalComponent, DetailsComponent]
})
export class IndexPage {
  private sidebarService = inject(SidebarService);
  private alertModalService = inject(ModalService);

  readonly sidebarId = 'overlay-create-user';
  readonly alertModalId = 'created-user-alert';

  selectedUser = signal<User | null>(null);
  userAction = signal<UserAction | null>(null);
  isSidebarOpen = signal<boolean>(false);
  sidebarTitle = computed(() => this.userAction() === 'create' ? 'Create Admin User' : 'Admin User Details');
  alertTitle = signal('');
  alertMessage = signal('');

  async onSelected(data: User) {
    this.onClosed();
    this.selectedUser.set(data);
    this.userAction.set('select');
    this.sidebarService.open(this.sidebarId);
  }

  async onAdd() {
    this.onClosed();
    this.userAction.set('create');
  }

  onClosed() {
    this.sidebarService.close(this.sidebarId);
    this.resetUserSettings();
  }

  onCreated() {
    this.clearAlertDetails();
    this.resetUserSettings();
    this.alertTitle.set('Admin user created');
    this.alertMessage.set('New admin has been created! User can check their email for their temporal password and should make sure they change it immediately.');
    this.alertModalService.open(this.alertModalId);
  }

  onModalAlertClosed() {
    this.alertModalService.close(this.alertModalId);
    this.clearAlertDetails();
  }

  private resetUserSettings() {
    this.userAction.set(null);
    this.selectedUser.set(null);
  }

  clearAlertDetails() {
    this.alertMessage.set('');
    this.alertTitle.set('');
  }
}
