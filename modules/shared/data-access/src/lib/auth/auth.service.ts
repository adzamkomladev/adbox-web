import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';

import { catchError, tap, throwError } from 'rxjs';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { environment as env } from '@env/environment';

import { Response, StoreService } from '../@common';
import { LoginRequest, LoginResponse } from './models';
import { RegisterRequest, RegisterResponse } from './models';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenStore = signal<string | null>(null);

  token = computed(this.tokenStore);
  isLoggedIn = computed(() => !!this.tokenStore());

  constructor(private http: HttpClient, private store: StoreService) {
    this.setupAuthToken();
  }

  setupAuthToken() {
    if (!this.token()) {
      console.log(this.getToken(), 'this is token');
      this.tokenStore.set(this.getToken());
    }
  }

  login(payload: LoginRequest) {
    return this.http.post<Response<LoginResponse>>(`${env.baseUrl}/auth/login`, payload)
      .pipe(
        tap(res => {
          console.log(res)
          if (res?.success && res.data?.accessToken) {
            this.storeToken(res.data.accessToken);
          }
        }),
        catchError(e => {
          console.log(e, 'this iserr')
          if (!(e instanceof Error)) {
            return throwError(() => new Error(e.error.message));
          }

          throw e;
        })
      );
  }

  register(payload: RegisterRequest) {
    return this.http.post<Response<RegisterResponse>>(`${env.baseUrl}/Auth/Register`, payload)
      .pipe(
        tap(res => {
          if (res?.success && res.data?.accessToken) {
            this.storeToken(res.data.accessToken);
          }
        }),
        catchError(e => {
          if (!(e instanceof Error)) {
            return throwError(() => new Error(e.error.message));
          }

          throw e;
        })
      );
  }

  private storeToken(token: string) {
    this.store.set(env.storeKeys.auth.token, {
      token
    });
    this.tokenStore.set(token);
  }

  private getToken() {
    try {
      const data = this.store.get(env.storeKeys.auth.token);
      const token = data?.token;

      if (!token) {
        return null;
      }

      return token;
    } catch (e) {
      return null;
    }
  }

  private clearToken() {
    this.store.clear(env.storeKeys.auth.token);
    this.tokenStore.set(null);
  }
}
