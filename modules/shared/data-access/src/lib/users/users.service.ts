import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, throwError } from 'rxjs';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { environment as env } from '@env/environment';

import { Response } from '../@common';
import { UsersRequest, UsersResponse } from './models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

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
}
