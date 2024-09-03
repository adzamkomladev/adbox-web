import { Route } from '@angular/router';

export const PAYMENTS = [
    {
        path: '',
        title: 'All Payments',
        loadComponent: () =>
            import('./index/index.page').then((m) => m.IndexPage),
    },
    {
        path: 'settings',
        title: 'Payment Settings',
        loadComponent: () =>
            import('./settings/settings.page').then((m) => m.SettingsPage),
    }
] as Route[];
