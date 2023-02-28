import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TablaComponent } from './cursos/components/tabla/tabla.component';
import { ListaComponent } from './cursos/components/lista/lista.component';
import { PaginaErrorComponent } from './components/pagina-error/pagina-error.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cursos',
    children: [
      { path: 'table', component: TablaComponent },
      { path: 'list', component: ListaComponent },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PaginaErrorComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
