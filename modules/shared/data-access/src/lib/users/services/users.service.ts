import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { catchError, throwError } from 'rxjs';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { environment as env } from '@env/environment';

import { Response } from '../../@common';
import { CreateAdminRequest, UpdateStatusRequest, UsersRequest, UsersResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient);

  findOneById(id: string) {
    // TODO: Implement this
  }

  findAll(payload: UsersRequest) {
    return this.http.get<Response<UsersResponse>>(
      `${env.baseUrl}/admin/users`,
      {
        params: {
          ...payload
        }
      })
      .pipe(
        catchError(e => {
          console.log(e, 'this iserr')
          if (!(e instanceof Error)) {
            return throwError(() => new Error(e.error.message));
          }

          throw e;
        })
      );
  }

  createAdmin(payload: CreateAdminRequest) {
    return this.http.post<Response<any>>(`${env.baseUrl}/admin/users`, payload)
      .pipe(
        catchError(e => {
          console.log(e, 'this iserr')
          if (!(e instanceof Error)) {
            return throwError(() => new Error(e.error.message));
          }

          throw e;
        })
      );
  }

  updateStatus(id: string, payload: UpdateStatusRequest) {
    return this.http.patch<Response<void>>(`${env.baseUrl}/admin/users/${id}/status/update`, payload)
      .pipe(
        catchError(e => {
          console.log(e, 'this iserr')
          if (!(e instanceof Error)) {
            return throwError(() => new Error(e.error.message));
          }

          throw e;
        })
      );
  }
}
