import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { catchError, Observable, throwError } from 'rxjs';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { environment as env } from '@env/environment';

import { Response } from '../../@common';
import { CreateAdminRequest, Role, UsersRequest, UsersResponse } from '../models';

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

  updateUserStatus(id: string, status: string): Observable<UsersResponse> {
    return this.http.patch<UsersResponse>(`${env.baseUrl}/admin/users/${id}/status/update`, {status})
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error(error);
  
          if (error.status === 400) {
            return throwError(() => new Error('Invalid payload'));
          } else if (error.status === 401) {
            return throwError(() => new Error('unautorized and this they worry me🤦‍♂️'));
          } else {
            return throwError(() => new Error('An unexpected error occurred'));
          }
        })
      );
    // TODO: Implement this
  }
}
