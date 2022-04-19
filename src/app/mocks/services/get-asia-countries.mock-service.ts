import { Observable, of } from 'rxjs';
import 'rxjs/add/observable/of';
import { MockBackend } from '../mock-backend';
import { STATUS } from 'angular-in-memory-web-api';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { RequestParams } from '../mock-backend';

const payload = require('../data/get-asia-countries-mock.json');

export class GetAsiaCountriesMockService extends MockBackend {
  public static PATH: RegExp = /ims\/countries\/Asia/;
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
