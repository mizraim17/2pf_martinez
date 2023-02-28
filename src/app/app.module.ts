import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TablaComponent } from './components/tabla/tabla.component';
import { EditarEstudianteComponent } from './components/editar-estudiante/editar-estudiante.component';
import { AgregarEstudianteComponent } from './components/agregar-estudiante/agregar-estudiante.component';
import { ConcatNombreApellidoPipe } from './pipes/concat-nombre-apellido.pipe';

import { ReactiveFormsModule } from '@angular/forms';

import { FontSizeDirective } from './directives/font-size.directive';
import { EstudianteArrService } from './services/estudiante-arr.service';
import { ValidaCalificacionPipe } from './pipes/valida-calificacion.pipe';
import { ListaComponent } from './components/lista/lista.component';
import { HomeComponent } from './components/home/home.component';
import { PaginaErrorComponent } from './components/pagina-error/pagina-error.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    ContentComponent,
    TablaComponent,
    EditarEstudianteComponent,
    AgregarEstudianteComponent,
    FontSizeDirective,
    ConcatNombreApellidoPipe,
    ValidaCalificacionPipe,
    ListaComponent,
    HomeComponent,
    PaginaErrorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [EstudianteArrService],
  bootstrap: [AppComponent],
})
export class AppModule {}
