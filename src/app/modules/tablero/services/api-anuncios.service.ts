import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from 'src/app/configs/app-config.service';

@Injectable({
  providedIn: 'root',
})
export class ApiAnunciosService {
  url: string = '';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {
    this.url = AppConfigService.settings.urlApis.listaReproduccionAnuncio;
  }

  Get(): Observable<any> {
    return this.http.get(this.url + '/Get', this.httpOptions);
  }
}
