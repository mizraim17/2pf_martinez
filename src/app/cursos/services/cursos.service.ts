import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { Estudiante } from 'src/app/models/estudiante';

@Injectable()
export class CursosService {
  private estudiantes: Estudiante[] = [
    {
      nombre: 'Johnny  ',
      apellido: 'Depp',
      curso: 'ANGULAR',
      correo: 'johnny_depp@gmail.com',
      calificacion: 6,
      sexo: 'Masculino',
      becado: false,
      foto: 'https://rickandmortyapi.com/api/character/avatar/183.jpeg',
    },
    {
      nombre: 'Aqua',
      apellido: ' Morty',
      curso: 'NODE ',
      correo: 'aqua_norty@gmail.com',
      calificacion: 8.6,
      sexo: 'masculino',
      becado: true,

      foto: 'https://rickandmortyapi.com/api/character/avatar/21.jpeg',
    },
    {
      nombre: 'Stan Lee  ',
      apellido: 'Rick',
      curso: 'NODE ',
      correo: 'stanlee_rick@gmail.com',
      calificacion: 1.9,
      sexo: 'masculino',
      becado: false,
      foto: 'https://rickandmortyapi.com/api/character/avatar/810.jpeg',
    },
    {
      nombre: 'Supernova',
      apellido: ' ',
      curso: 'REACT',
      correo: 'amy@gmail.com',
      calificacion: 8.6,
      sexo: 'femenino',
      becado: true,

      foto: 'https://rickandmortyapi.com/api/character/avatar/340.jpeg',
    },

    {
      nombre: 'Snake',
      apellido: 'Reporter',
      curso: 'NODE ',
      correo: 'snake_reporter@gmail.com',
      calificacion: 5.9,
      sexo: 'masculino',
      becado: false,
      foto: 'https://rickandmortyapi.com/api/character/avatar/589.jpeg',
    },

    {
      nombre: 'Karen ',
      apellido: 'Entity',
      curso: 'NODE ',
      correo: 'karen@gmail.com',
      calificacion: 7.7,
      sexo: 'femenino',
      becado: true,

      foto: 'https://rickandmortyapi.com/api/character/avatar/188.jpeg',
    },
  ];

  private estudiante$!: BehaviorSubject<Estudiante[]>;

  constructor() {
    this.estudiante$ = new BehaviorSubject<Estudiante[]>(this.estudiantes);
  }

  obtenerEstudiantesObservable(): Observable<Estudiante[]> {
    return this.estudiante$.asObservable();
  }

  agregarEstudiante(estudiante: Estudiante): void {
    this.estudiantes.push(estudiante);
    this.estudiante$.next(this.estudiantes);
  }

  editarEstudiante(estudiante: any, arr: Estudiante) {
    this.estudiantes.map((elem, i) => {
      if (elem == arr) {
        this.estudiantes[i] = estudiante;
        this.estudiante$.next(this.estudiantes);
      }
    });
  }

  eliminarEstudiante(i: number): void {
    this.estudiantes.splice(i, 1);
    this.estudiante$.next(this.estudiantes);
  }

  filtrarEstudiante(word: string): void {
    if (word == '') {
      this.estudiante$.next(this.estudiantes);
    } else {
      of(this.estudiantes)
        .pipe(
          map((filtrada: Estudiante[]) => {
            return filtrada.filter((ele) => {
              return ele.nombre
                .toLocaleLowerCase()
                .includes(word.toLocaleLowerCase());
            });
          })
        )
        .subscribe((filtrada) => {
          this.estudiante$.next(filtrada);
        });
    }
  }
}
