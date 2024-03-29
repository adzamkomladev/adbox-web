import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },
    {
        path: '',
        loadComponent: () =>
            import('./@common/layouts/main/main.layout').then(
                (m) => m.MainLayout
            ),
        loadChildren: () =>
            import('./@common/layouts/main/routes'),
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('@adbox/auth').then(m => m.AUTH),
    },

];
