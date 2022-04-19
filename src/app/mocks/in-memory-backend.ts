import { MockBackend } from './mock-backend';
import { Observable } from 'rxjs/Observable';
import { EMPTY } from 'rxjs';
import 'rxjs/add/observable/of';
import { RequestInfo, InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { HttpResponse } from '@angular/common/http';
import { GetEuropeCountriesMockService } from 'src/app/mocks/services/get-europe-countries.mock-service';
import { GetAsiaCountriesMockService } from 'src/app/mocks/services/get-asia-countries.mock-service';

@Injectable()
export class InMemoryBackend extends InMemoryDbService {

  private mockBackends: { path: RegExp; mock: MockBackend }[] = [];

  constructor() {
    super();
  }

  public createDb(): {} {
    this.mockBackends.push({
      path: GetEuropeCountriesMockService.PATH,
      mock: new GetEuropeCountriesMockService(),
    },
      {
        path: GetAsiaCountriesMockService.PATH,
        mock: new GetAsiaCountriesMockService(),
      }
      );
    return {};
  }

  public get(reqInfo: RequestInfo): Observable<HttpResponse<any>> {
    const backend = this.getBackend(
      'http://localhost:4200',
      reqInfo.url,
      (reqInfo.req as any).urlWithParams
    );

    if (backend) {
      return backend.get({ req: reqInfo });
    }

    return EMPTY;
  }

  private getBackend(
    host: string,
    resourceUrl: string,
    url: string
  ): MockBackend | undefined {
    if (resourceUrl.endsWith("Europe")  || resourceUrl.endsWith("Asia")) {
      const backend = this.mockBackends.find((o) => o.path.test(url));
      return backend ? backend.mock : undefined;
    }
    return undefined;
  }
}
