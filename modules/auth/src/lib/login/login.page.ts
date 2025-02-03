import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { finalize } from 'rxjs';

import { Form } from './models/form.model';

import { AuthService } from '@adbox/shared/data-access';

@Component({
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './login.page.html',
    styles: ``
})
export class LoginPage {
    private auth = inject(AuthService);
    private router = inject(Router);

    returnUrl = input<string>();

    model: Form = {
        email: '',
        password: '',
        rememberMe: false
    };

    loading = false;
    message?: string | null;
    success = false;

    onSubmit() {
        this.loading = true;

        this.auth.login({ ...this.model })
            .pipe(finalize(() => this.loading = false))
            .subscribe({
                next: (res) => {
                    this.message = res.message;

                    if (!res.success) {
                        this.success = false;
                        return;
                    }

                    this.success = true;

                    this.router.navigateByUrl(this.returnUrl() || 'users');
                },
                error: (e: Error) => {
                    this.success = false;
                    this.message = e.message;
                }
            });
    }
}
