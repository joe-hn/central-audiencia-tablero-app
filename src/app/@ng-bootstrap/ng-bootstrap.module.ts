import { NgModule } from '@angular/core';
import { NgbAlertModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  exports: [
    NgbPaginationModule,
    NgbAlertModule
  ]
})
export class NgBootstrapModule { }
