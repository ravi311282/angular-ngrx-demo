import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})

export class CountriesService {

  // End point is getting Timeout Connection issue hence created mock response.
  public endpoint = 'https://restcountries.eu/rest/v2/region/';

  public mock_endpoint = 'http://localhost:4200/ims/countries/';

  public handleError(apiCall: string) {
    return (error: HttpErrorResponse): Observable<any> => {
      return throwError(error);
    };
  };

  getCountries(region: string): Observable<Country[]> {
      const url = `${this.mock_endpoint}${region}`;
      return this.http.get<any>(url).pipe(
        catchError(this.handleError('getCountries'))
      );
  };

  constructor(
    private http: HttpClient) { }
}
