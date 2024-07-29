import {Component, computed, inject, signal} from '@angular/core';
import {CommonModule} from '@angular/common';

import {User} from '@adbox/shared/data-access';
import {
  ModalService,
  ModalComponent,
  SidebarComponent,
  SidebarService,
} from '@adbox/shared/ui';

import {UserAction} from './types/page.type';

import {UsersTable} from './tables/users.table';
import {CreateForm} from './forms/create/create.form';
import {DetailsComponent} from './components/details.component';

@Component({
  standalone: true,
  templateUrl: './index.page.html',
  styles: ``,
  imports: [
    CommonModule,
    SidebarComponent,
    UsersTable,
    CreateForm,
    ModalComponent,
    DetailsComponent,
  ],
})
export class IndexPage {
  private sidebarService = inject(SidebarService);
  private alertModalService = inject(ModalService);

  readonly sidebarId = 'overlay-create-user';
  readonly alertModalId = 'created-user-alert';

  selectedUser = signal<User | null>({
    avatar: 'https://avatars.githubusercontent.com/u/68711053',
    createdAt: new Date('2024-04-23T20:12:20.525Z'),
    dateOfBirth: null,
    email: 'Meaghan24@gmail.com',
    firstName: 'Sienna',
    id: '76527895-92c5-496d-acfd-3b0e02ea46c0',
    lastName: 'Carroll',
    campaign: null,
    role: {
      code: '',
      createdAt: new Date(''),
      description: '',
      id: '',
      name: '',
      updatedAt: new Date('14 May 2024'),
    },
    roleTitle: '',
    status: 'Admin',
    updatedAt: new Date(''),
    sex:'male',
    wallet: null,
  });
  userAction = signal<UserAction | null>(null);
  isSidebarOpen = signal<boolean>(false);
  sidebarTitle = computed(() =>
    this.userAction() === 'create' ? 'Create Admin User' : 'Admin User Details'
  );
  alertTitle = signal('');
  alertMessage = signal('');
  sidebarExtraStryles = signal('');

  async onSelected(data: User) {
    console.log(data);
    this.onClosed();
    this.selectedUser.set(data);
    this.userAction.set('select');
    this.sidebarService.open(this.sidebarId);
    this.sidebarExtraStryles.set(
      ''
    );
  }

 

  async onAdd() {
    this.onClosed();
    this.userAction.set('create');
  }

  onClosed() {
    this.sidebarService.close(this.sidebarId);
    this.resetUserSettings();
    this.sidebarExtraStryles.set('bg-white');
  }

  onCreated() {
    this.sidebarExtraStryles.set("h-full")
    this.clearAlertDetails();
    this.resetUserSettings();
    this.alertTitle.set('Admin user created');
    this.alertMessage.set(
      'New admin has been created! User can check their email for their temporal password and should make sure they change it immediately.'
    );
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
