import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableroRoutingModule } from './tablero-routing.module';
import { TableroComponent } from './tablero.component';
import { ListaTableroComponent } from './components/lista-tablero/lista-tablero.component';
import { AngularMaterialModule } from 'src/app/@angular-material/angular-material.module';
import { AudienciasComponent } from './components/audiencias/audiencias.component';
import { AnunciosComponent } from './components/anuncios/anuncios.component';

import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

@NgModule({
  declarations: [
    TableroComponent,
    ListaTableroComponent,
    AudienciasComponent,
    AnunciosComponent,
  ],
  imports: [
    CommonModule,
    TableroRoutingModule,
    AngularMaterialModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
})
export class TableroModule {}
