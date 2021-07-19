import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IAppConfig } from './app-config.interface';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  static settings: IAppConfig;

  constructor(private http: HttpClient) {}

  public load(): any {
    return new Promise((resolve, reject) => {
      this.http.get(`assets/config/config.${environment.env}.json`).subscribe(
        (result) => {          
          AppConfigService.settings = result as IAppConfig;
          resolve(true);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  
}
