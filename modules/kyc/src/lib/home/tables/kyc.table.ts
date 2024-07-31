import { Component, computed, inject, OnInit, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService, User, UsersResponse } from '@adbox/shared/data-access';
import { KycFilter } from "../filters/kyc.filter";

@Component({
  selector: 'adbox-kyc-table',
  standalone: true,
  imports: [CommonModule, KycFilter],
  templateUrl: './kyc.table.html',
  styles: `:host { display: block; }`,
})
export class KycTable implements OnInit {
  private usersService = inject(UsersService);

  selected = output<User>();
  addUser = output<void>();

  data = signal<UsersResponse | null>(null);
  users = computed(() => this.data()?.users || []);
  next = computed(() => this.data()?.page !== this.data()?.totalPages);
  prev = computed(() => this.data()?.page !== 1);
  page = computed(() => this.data()?.page || 1);
  size = computed(() => this.data()?.size || 10);

  ngOnInit(): void {
    this.usersService.findAll({})
      .subscribe(res => this.data.set(res?.data || null));
  }

  onSelect(data: User) {
    this.selected.emit(data);
  }

  onAddUser() {
    this.addUser.emit();
  }

  onNext() {
    this.usersService.findAll({ page: this.page() + 1, size: this.size() }).
      subscribe(res => this.data.set(res?.data || this.data()));
  }

  onPrev() {
    this.usersService.findAll({ page: this.page() - 1, size: this.size() }).
      subscribe(res => this.data.set(res?.data || this.data()));
  }
}

