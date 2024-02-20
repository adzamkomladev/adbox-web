import { Route } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () =>
            import('./../../../nx-welcome.component').then(
                (m) => m.NxWelcomeComponent
            ),
    }
] as Route[];
