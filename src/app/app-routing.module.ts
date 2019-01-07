import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards';

const routes: Routes = [
  //para definir que é um module e que tem um routing próprio
  { path: '', 
  loadChildren: './layout/layout.module#LayoutModule'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
