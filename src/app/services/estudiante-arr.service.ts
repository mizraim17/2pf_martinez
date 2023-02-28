import { Injectable } from '@angular/core';
import { Estudiante } from '../models/estudiante';
import { BehaviorSubject, Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstudianteArrService {
  private estudiante$!: BehaviorSubject<Estudiante[]>;

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

  constructor() {
    this.estudiante$ = new BehaviorSubject(this.estudiantes);
    of(this.estudiantes)
      .pipe(
        map((list: Estudiante[]) => {
          return list.filter((list: Estudiante) => list.nombre == 'snake');
        })
      )
      .subscribe((list) => {
        console.log('obtenido desde of', list);
      });
  }

  ngOnInit(): void {}

  obtenerEstudiantesObservable(): Observable<Estudiante[]> {
    return this.estudiante$.asObservable();
  }

  agregarEstudiante(estudiante: Estudiante) {
    this.estudiantes.push(estudiante);
    this.estudiante$.next(this.estudiantes);
  }

  editarEstudiante(estu: any, data: Estudiante) {
    console.log('estu', estu);

    let arr_copy = this.estudiantes;

    arr_copy.map((elem, i) => {
      if (arr_copy[i] == data) {
        console.log('element', elem);

        arr_copy[i] = {
          nombre: estu.nombre,
          apellido: estu.apellido,
          curso: estu.curso,
          correo: estu.correo,
          calificacion: estu.calificacion,
          sexo: estu.sexo,
          becado: estu.becado,
          foto: estu.foto,
        };
      }
    });

    this.estudiantes = arr_copy;
    this.estudiante$.next(this.estudiantes);
  }

  eliminarEstudiante(i: number) {
    this.estudiantes.splice(i, 1);
    this.estudiante$.next(this.estudiantes);
  }

  filtrarEstudiante(word: string) {
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
