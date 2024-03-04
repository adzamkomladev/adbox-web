import { Route } from '@angular/router';

export const USERS = [
    {
        path: '',
        loadComponent: () =>
            import('./index/index.page').then((m) => m.IndexPage),
    }
] as Route[];
