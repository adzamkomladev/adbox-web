import { Component, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { finalize, map, tap } from 'rxjs';

import { AssetsService, RolesService, UsersService } from '@adbox/shared/data-access';

import { CreateFormModel } from '../../models/create.form.model';

@Component({
    selector: 'adbox-create-user-form',
    templateUrl: './create.form.html',
    styles: ``,
    imports: [CommonModule, FormsModule]
})
export class CreateForm {
  private assetsService = inject(AssetsService);
  private rolesService = inject(RolesService);
  private usersService = inject(UsersService);

  created = output<void>();
  close = output<void>();

  roles$ = this.rolesService.findAll()
    .pipe(
      map(res => res?.data || []),
      map(data => data?.filter(r => ['ADMIN', 'SUPER_ADMIN'].includes(r.code))),
      tap(data => this.model.roleId = data?.[0]?.id || this.model.roleId),
    );
  model: CreateFormModel = {
    firstName: '',
    lastName: '',
    email: '',
    roleId: '',
  };

  loading = false;
  success = false;
  message?: string | null;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.assetsService.upload(file).subscribe(res => this.model.avatar = res?.url || this.model.avatar);
    }
  }

  onSubmit() {
    this.loading = true;

    this.usersService.createAdmin({ ...this.model })
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: async (res) => {
          this.message = res.message;

          if (!res.success) {
            this.success = false;
            return;
          }

          this.success = true;
          this.created.emit();
        },
        error: (e: Error) => {
          this.success = false;
          this.message = e.message;
        }
      });
  }

  onClose() {
    this.close.emit();
  }
}
