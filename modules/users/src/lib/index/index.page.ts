import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.page.html',
  styles: ``,
})
export class IndexPage {
  users = signal([
    {
      name: 'Bright Okoli',
      email: 'bright@adbox.africa',
      avatar: 'https://ui-avatars.com/api/?name=Bright%20Okoli',
      role: {
        name: 'Admin',
        branch: 'IT Admin'
      },
      status: 'active',
      createdBy: 'komla@adbox.africa',
      createdAt: new Date()
    },
    {
      name: 'Bright Okoli',
      email: 'bright@adbox.africa',
      avatar: 'https://ui-avatars.com/api/?name=Bright%20Okoli',
      role: {
        name: 'Admin',
        branch: 'IT Admin'
      },
      status: 'active',
      createdBy: 'komla@adbox.africa',
      createdAt: new Date()
    },
    {
      name: 'Bright Okoli',
      email: 'bright@adbox.africa',
      avatar: 'https://ui-avatars.com/api/?name=Bright%20Okoli',
      role: {
        name: 'Admin',
        branch: 'IT Admin'
      },
      status: 'active',
      createdBy: 'komla@adbox.africa',
      createdAt: new Date()
    }
  ])
}
