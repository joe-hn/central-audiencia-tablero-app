import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTableroComponent } from './components/lista-tablero/lista-tablero.component';
import { TableroComponent } from './tablero.component';

const routes: Routes = [
  {
    path: '',
    component: TableroComponent,
    children: [{ path: 'lista', component: ListaTableroComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableroRoutingModule {}
