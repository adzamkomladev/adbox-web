import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, throwError } from 'rxjs';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { environment as env } from '@env/environment';

import { Response } from '../@common';
import { KycData, KycRequest, KycResponse } from './models/kyc.model';

@Injectable({
  providedIn: 'root',
})
export class KycService {
  constructor(private http: HttpClient) {}

  findAll(payload: KycRequest) {
    return this.http
      .get<Response<KycData>>(`${env.baseUrl}/admin/kyc`, {
        params: {
          ...payload,
        },
      })
      .pipe(
        catchError((e) => {
          console.log(e, 'this iserr');
          if (!(e instanceof Error)) {
            return throwError(() => new Error(e.error.message));
          }

          throw e;
        })
      );
  }
}
