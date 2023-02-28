import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarEstudianteComponent } from './components/agregar-estudiante/agregar-estudiante.component';
import { EditarEstudianteComponent } from './components/editar-estudiante/editar-estudiante.component';
import { ListaComponent } from './components/lista/lista.component';
import { TablaComponent } from './components/tabla/tabla.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { ConcatNombreApellidoPipe } from '../pipes/concat-nombre-apellido.pipe';
import { ValidaCalificacionPipe } from '../pipes/valida-calificacion.pipe';
import { MatIconModule } from '@angular/material/icon';
import { EstudianteArrService } from '../services/estudiante-arr.service';

@NgModule({
  declarations: [
    AgregarEstudianteComponent,
    EditarEstudianteComponent,
    ListaComponent,
    TablaComponent,
    ConcatNombreApellidoPipe,
    ValidaCalificacionPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatIconModule,
  ],
  exports: [
    AgregarEstudianteComponent,
    EditarEstudianteComponent,
    ListaComponent,
    TablaComponent,
    ConcatNombreApellidoPipe,
    ValidaCalificacionPipe,
    MatIconModule,
  ],

  providers: [EstudianteArrService],
})
export class CursosModule {}
