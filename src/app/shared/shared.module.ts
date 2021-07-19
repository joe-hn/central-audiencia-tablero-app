import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NbCardModule, NbDialogModule, NbIconModule, NbLayoutModule, NbMenuModule, NbSidebarModule } from '@nebular/theme';
import { NebularModule } from '../@nebular/nebular.module';

import { AngularMaterialModule } from '../@angular-material/angular-material.module';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';


@NgModule({
  declarations: [  
  SidebarComponent, ModalEliminarComponent
  ],
  imports: [    
    NebularModule,
    CommonModule,
    NbCardModule,
    NbMenuModule,
    NbSidebarModule.forRoot(),    
    NbLayoutModule,
    NbIconModule,
    AngularMaterialModule,
    NbDialogModule.forRoot()
  ],
  exports: [
    SidebarComponent    
  ]
})
export class SharedModule { }
