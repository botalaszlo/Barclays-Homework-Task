import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Vat } from 'src/app/shared/models/vat.model';
import { AbstractService } from './abstract.service';
import { ObjectUtil } from '../utils/object.util';
import { Config } from 'src/config';


@Injectable({
  providedIn: 'root'
})
export class VatService extends AbstractService {
  private static readonly url: string = Config.API_URL;

  constructor(protected http: HttpClient) {
    super(http);
  }

  getVat(): Observable<Vat> {
    return this.http.get<Vat>(VatService.url)
      .pipe(
        map(data => ObjectUtil.camelizeKeys(data)),
        catchError(this.handleError<Vat>('getVat'))
      );
  }


}
