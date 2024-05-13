import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, map, throwError } from 'rxjs';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { environment as env } from '@env/environment';

import { Response } from '../@common';
import { Kyc, KycResponse, KycRequest,} from './models/kyc.model';

@Injectable({
  providedIn: 'root',
})
export class KycService {
  constructor(private http: HttpClient) {}

  findAll(payload: KycRequest) {
    return this.http
      .get<Response<KycResponse>>(`${env.baseUrl}/admin/kyc`, {
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

  getKycOf(id: string): Observable<Kyc | null> {

    return this.findAll({}).pipe(
      catchError((error) => {
        console.error('Error fetching KYC data:', error);
        return throwError(() => new Error('Error retrieving KYC data'));
      }),
      map((response) => {
        const kycs = response.data?.kycs || []; // Handle potential empty response
        const targetKyc = kycs.find((kyc) => kyc.user.id === id);

        // Cache the retrieved KYC data
        if (targetKyc) {
          console.log(targetKyc);
          // this.kycCache.set(id, targetKyc);
        }

        return targetKyc || null; // Return found KYC or null if not found
      })
    );
  }
}
