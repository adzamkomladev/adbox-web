import { Route } from '@angular/router';
import { kycChildRoute } from './index/routes';

export const KYC = [
    {
        path: '',
        loadComponent: () =>
            import('./index/index.page').then((m) => m.IndexPage),
        loadChildren:()=>kycChildRoute
    },
] as Route[];
