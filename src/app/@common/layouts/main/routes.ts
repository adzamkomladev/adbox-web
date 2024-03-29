import { Route } from '@angular/router';

import { authGuard } from '../../guards/auth.guard';

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
        canActivate: [authGuard]
    },
    {
        path: 'kyc',
        loadChildren: () => import('@adbox/kyc').then((m) => m.KYC),
        canActivate: [authGuard]
    }
] as Route[];
