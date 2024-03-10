import { Component, EventEmitter, OnInit, Output, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { User, UsersResponse, UsersService } from '@adbox/shared/data-access';

@Component({
  selector: 'adbox-users-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.table.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class UsersTable implements OnInit {
  @Output() selected = new EventEmitter<User>();

  private usersService = inject(UsersService);

  data = signal<UsersResponse | null>(null);

  users = computed(() => this.data()?.users || []);
  next = computed(() => this.data()?.page !== this.data()?.totalPages);
  prev = computed(() => this.data()?.page !== 1);

  ngOnInit(): void {
    this.usersService.findAll({})
      .subscribe(res => this.data.set(res?.data || null));
  }

  onSelect(data: User) {
    this.selected.emit(data);
  }
}
