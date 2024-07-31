import { Route } from '@angular/router';

export const KYC = [
    {
        path: '',
        loadComponent: () =>
            import('./home/home.page').then((m) => m.HomePage),
    }
] as Route[];
