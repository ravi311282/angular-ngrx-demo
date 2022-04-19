import { Observable, of } from 'rxjs';
import 'rxjs/add/observable/of';
import { MockBackend } from '../mock-backend';
import { STATUS } from 'angular-in-memory-web-api';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { RequestParams } from '../mock-backend';

const payload = require('../data/get-europe-countries-mock.json');

export class GetEuropeCountriesMockService extends MockBackend {
  public static PATH: RegExp = /ims\/countries\/Europe/;
  public get(params: RequestParams): Observable<HttpResponse<any>> {
    return Observable.of(
      new HttpResponse<any>({
        body: payload,
        status: STATUS.OK,
        headers: new HttpHeaders(),
      })
    );
  }
}
