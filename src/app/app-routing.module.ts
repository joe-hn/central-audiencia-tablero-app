import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tablero',
    loadChildren: () =>
      import('./modules/tablero/tablero.module').then((m) => m.TableroModule),
  },
  { path: '', redirectTo: 'tablero/lista', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
