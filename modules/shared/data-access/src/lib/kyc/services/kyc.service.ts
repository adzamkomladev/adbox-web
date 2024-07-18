import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { KYCRequest, KYCResponse } from '../models';
import { Response } from '../../@common';
import { environment as env } from '@env/environment';
import { catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class KYCService {

private http = inject(HttpClient);

findAll(payload:KYCRequest ) {
  return this.http.get<Response<KYCResponse>>(
    `${env.baseUrl}/admin/kyc`,
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


  constructor() { }
}
