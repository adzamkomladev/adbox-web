import {
  Component,
  OnInit,
  computed,
  inject,
  output,
  signal,
} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
  User,
  UsersResponse,
  UsersService,
} from '@adbox/shared/data-access';
import {TableHeadComponent} from './rows/data/head.component';

@Component({
  selector:
    'adbox-users-table',
  standalone: true,
  imports: [
    CommonModule,
    TableHeadComponent,
  ],
  templateUrl:
    './users.table.html',
  styles: `
    :host {
      display:block;}
  `,
})
export class UsersTable
  implements OnInit
{
  private usersService =
    inject(UsersService);

  selected = output<User>();
  addUser = output<void>();

  data =
    signal<UsersResponse | null>(
      null
    );

    paginationPages = signal<number[]>([]);

  users = computed(
    () =>
      this.data()?.users || []
  );

  next = computed(
    () =>
      this.data()?.page !==
      this.data()?.totalPages
  );
  prev = computed(
    () =>
      this.data()?.page !== 1
  );
  page = computed(
    () =>
      this.data()?.page || 1
  );
  size = computed(
    () =>
      this.data()?.size || 20
  );

  paginationsPages = computed(() => {
    const totalPages = this.data()?.totalPages || 1; 
    const pages: number[] = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  });


  ngOnInit(): void {
    this.usersService
      .findAll({})
      .subscribe((res) =>
        this.data.set(
          res?.data || null
        )
      );

     
  }

  onSelect(data: User) {
    this.selected.emit(data);
  }

  onAddUser() {
    this.addUser.emit();
  }

  onFetch(page:number) {
    this.usersService
      .findAll({
        page: page,
        size: this.size(),
      })
      .subscribe((res) =>
        this.data.set(
          res?.data ||
            this.data()
        )
      );
  }


  onNext() {
    this.onFetch(this.page() + 1)
  }

  onPrev() {
   this.onFetch(this.page() - 1)
  }

  onGotoPage(page:number) {
    this.onFetch(page)
  }

}
