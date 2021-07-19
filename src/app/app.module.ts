import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbMenuModule,
  NbSidebarModule,
  NbSidebarService,
  NbThemeModule,
  NbToastrModule,
} from '@nebular/theme';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NebularModule } from './@nebular/nebular.module';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppConfigService } from './configs/app-config.service';
import { SharedModule } from './shared/shared.module';

export function configProvider(cs: AppConfigService) {
  return () => cs.load();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    NebularModule,
    AngularMaterialModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbEvaIconsModule,
    ReactiveFormsModule,
    NbToastrModule.forRoot(),
    SharedModule,
    NgbModule,
    FormsModule,
  ],
  providers: [
    NbSidebarService,
    AppConfigService,
    {
      deps: [AppConfigService],
      multi: true,
      provide: APP_INITIALIZER,
      useFactory: configProvider,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
