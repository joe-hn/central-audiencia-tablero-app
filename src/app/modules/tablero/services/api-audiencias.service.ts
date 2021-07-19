import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from 'src/app/configs/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiAudienciasService {
  url: string = '';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { 
    this.url = AppConfigService.settings.urlApis.listaReproduccionAudiencia;
  }

  Get(): Observable<any>{
    return this.http.get(this.url + '/GetAudiencia', this.httpOptions);
  }

  GetPartes(): Observable<any>{
    return this.http.get(this.url + '/GetAllPartes', this.httpOptions);
  }
}
