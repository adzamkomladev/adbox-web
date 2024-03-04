import { Route } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () =>
            import('./../../../nx-welcome.component').then(
                (m) => m.NxWelcomeComponent
            ),
    },
    {
        path: 'users',
        loadChildren: () => import('@adbox/users').then((m) => m.USERS),
    }
] as Route[];
