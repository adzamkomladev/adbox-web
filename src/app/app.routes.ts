import { Route } from '@angular/router';
import { LandingPage } from './landing/landing.page';

export const appRoutes: Route[] = [
    {
        path: '',
        component: LandingPage
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
