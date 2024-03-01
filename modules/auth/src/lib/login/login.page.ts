import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Form } from './models/form.model';

@Component({
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './login.page.html',
    styles: ``,
})
export class LoginPage {
    model: Form = {
        email: '',
        password: '',
        rememberMe: false
    };

    loading = false;
    message?: string | null;
    success = false;

    onSubmit() {
        console.log(this.model);
        this.success = true;
    }
}
