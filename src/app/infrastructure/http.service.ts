import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private http: HttpClient
  ) {}

  private createHeaders(
    additionalHeaders?: Array<{ key: string; value: string }>
  ): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (additionalHeaders) {
      for (const item of additionalHeaders) {
        headers = headers.append(item.key, item.value);
      }
    }

    return headers;
  }

  private handleRequest<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    url: string,
    options: { body?: any; params?: any; headers: HttpHeaders }
  ): Observable<T> {

    const request = this.http.request<T>(method, url, options).pipe(
      catchError(this.handleError)
    );

    return request;
  }

  get<T>(
    url: string,
    params: Record<string, string>,
    additionalHeaders?: Array<{ key: string; value: string }>
  ): Observable<T> {
    const headers = this.createHeaders(additionalHeaders);
    return this.handleRequest<T>('GET', url, { params, headers });
  }

  post<T, P>(
    url: string,
    body: P,
    additionalHeaders?: Array<{ key: string; value: string }>
  ): Observable<T> {
    const headers = this.createHeaders(additionalHeaders);
    return this.handleRequest<T>('POST', url, { body, headers });
  }

  put<T, P>(
    url: string,
    body: P,
    additionalHeaders?: Array<{ key: string; value: string }>
  ): Observable<T> {
    const headers = this.createHeaders(additionalHeaders);
    return this.handleRequest<T>('PUT', url, { body, headers });
  }

  delete<T>(
    url: string,
    additionalHeaders?: Array<{ key: string; value: string }>
  ): Observable<T> {
    const headers = this.createHeaders(additionalHeaders);
    return this.handleRequest<T>('DELETE', url, { headers });
  }

  patch<T, P>(
    url: string,
    body: P,
    additionalHeaders?: Array<{ key: string; value: string }>
  ): Observable<T> {
    const headers = this.createHeaders(additionalHeaders);
    return this.handleRequest<T>('PATCH', url, { body, headers });
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(error);
  }
}
