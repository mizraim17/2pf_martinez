import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Estudiante } from '../../../models/estudiante';

import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.scss'],
})
export class EditarEstudianteComponent {
  dataSource!: MatTableDataSource<Estudiante>;
  suscripcion!: Subscription;
  formulario: FormGroup;

  private arr_1: Estudiante[] = [
    {
      nombre: 'Baby ',
      apellido: 'Rick',
      curso: 'ANGULAR',
      correo: 'baby@gmail.com',
      calificacion: 4.6,
      sexo: 'Masculino',
      becado: true,
      foto: 'https://rickandmortyapi.com/api/character/avatar/741.jpeg',
    },
  ];

  constructor(
    private estudianteService: CursosService,

    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    let controles: any = {
      nombre: new FormControl(data.nombre, [Validators.required]),
      apellido: new FormControl(data.apellido, [Validators.required]),
      curso: new FormControl(data.curso, [Validators.required]),
      correo: new FormControl(data.correo, [
        Validators.required,
        Validators.pattern(
          '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}'
        ),
      ]),
      calificacion: new FormControl(data.calificacion, [Validators.required]),
      sexo: new FormControl(data.sexo, [Validators.required]),
      becado: new FormControl(data.becado, []),
      foto: new FormControl(data.foto, [Validators.required]),
    };
    this.formulario = new FormGroup(controles);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Estudiante>();
    this.suscripcion = this.estudianteService
      .obtenerEstudiantesObservable()
      .subscribe((estudiantes: Estudiante[]) => {
        this.dataSource.data = estudiantes;
      });
  }

  editEstudiante(estu: any, data: Estudiante) {
    this.estudianteService.editarEstudiante(estu.value, data);
  }
}
