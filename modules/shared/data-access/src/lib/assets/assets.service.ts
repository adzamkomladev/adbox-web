import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, tap, throwError } from 'rxjs';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { environment as env } from '@env/environment';
import { UploadResponse } from './models';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  private http = inject(HttpClient);

  upload(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    return this.http.post<UploadResponse>(
      `${env.assets.baseUrl}/assets/upload`,
      formData,
      {
        headers: {
          'x-client-key': env.assets.clientKey,
          'x-client-secret': env.assets.clientSecret
        }
      }
    ).pipe(
      tap(res => console.log(res)),
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
