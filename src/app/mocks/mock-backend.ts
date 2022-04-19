import { RequestInfo, STATUS } from 'angular-in-memory-web-api';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export type RequestParams = {
  req: RequestInfo;
};

export abstract class MockBackend {
  public get(params: RequestParams): Observable<HttpResponse<any>> {
    return Observable.of(
      new HttpResponse<any>({
        url: params.req.resourceUrl,
        status: STATUS.NOT_FOUND,
        statusText: `Cannot GET to "${params.req.resourceUrl}".`,
      })
    );
  }
}
