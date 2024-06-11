import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { environment as env } from '@env/environment';

import { Response } from '../../@common';
import { Role } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private http = inject(HttpClient);

  findAll() {
    return this.http.get<Response<Role[]>>(`${env.baseUrl}/admin/users/roles`)
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
