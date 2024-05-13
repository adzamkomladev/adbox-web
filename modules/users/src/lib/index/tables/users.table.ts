import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  computed,
  inject,
  signal,
} from '@angular/core';
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
  private usersService = inject(UsersService);

  @Output() selectedUser = new EventEmitter<User>();
  @Output() addUser = new EventEmitter<void>();

  usersPerPage = 10;
  totalPages = 1;
  currentPage = 1;
  loading = false;

  data = signal<UsersResponse | null>(null);
  users = computed(() => this.data()?.users || []);
  next = computed(() => this.data()?.page !== this.data()?.totalPages);
  prev = computed(() => this.data()?.page !== 1);

  fetchData = () => {
    this.usersService
      .findAll({ page: this.currentPage, size: this.usersPerPage })
      .subscribe((res) => this.data.set(res?.data || null));
    return (this.loading = false);
  };

  onNext() {
    this.loading = true;
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchData();
    }
  }

  onPrevious() {
    this.loading = true;
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchData();
    }
  }

  ngOnInit(): void {
    this.usersService.findAll({}).subscribe((res) => {
      this.data.set(res?.data || null);
      this.currentPage = res?.data?.page || 1;
      this.usersPerPage = res?.data?.size || 10;
      this.totalPages = res?.data?.totalPages || 1;
      this.loading = false;
    });
  }

  onSelect(data: User) {
    this.selectedUser.emit(data);
  }

  onAddUser() {
    this.addUser.emit();
  }

  
}
