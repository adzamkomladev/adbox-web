import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { provideToastr } from 'ngx-toastr';

import { tokenInterceptor } from './@common/interceptors/token.interceptor';
import { errorInterceptor } from './@common/interceptors/error.interceptor';

import { appRoutes } from './app.routes';

import { ToastComponent } from './@common/components/toast/toast.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withComponentInputBinding(), withEnabledBlockingInitialNavigation()),
    provideAnimationsAsync(),
    provideToastr({
      toastComponent: ToastComponent
    }),
    provideHttpClient(
      withInterceptors([
        tokenInterceptor,
        errorInterceptor
      ])
    ),
  ],
};
