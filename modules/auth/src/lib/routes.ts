import { Route } from '@angular/router';

import { MainLayout } from './@common/layouts/main/main.layout';


export const AUTH = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                loadComponent: () =>
                    import('./login/login.page').then((m) => m.LoginPage),
            },
            {
                path: 'password/forgot',
                loadComponent: () =>
                    import('./password/forgot/forgot.page').then(
                        (m) => m.ForgotPage
                    ),
            },
            {
                path: 'password/reset',
                loadComponent: () =>
                    import('./password/reset/reset.page').then(
                        (m) => m.ResetPage
                    ),
            },
            {
                path: 'verification/email',
                loadComponent: () =>
                    import('./verification/email/email.page').then(
                        (m) => m.EmailPage
                    ),
            },
            {
                path: 'verify/email',
                loadComponent: () =>
                    import('./verify/email/email.page').then(
                        (m) => m.EmailPage
                    ),
            },
        ],
    },
] as Route[];
