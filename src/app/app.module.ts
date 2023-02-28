import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CursosModule } from './cursos/cursos.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { ContentComponent } from './core/components/content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { ReactiveFormsModule } from '@angular/forms';
import { FontSizeDirective } from './directives/font-size.directive';
import { EstudianteArrService } from './services/estudiante-arr.service';
import { HomeComponent } from './core/components/home/home.component';
import { PaginaErrorComponent } from './core/components/pagina-error/pagina-error.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    ContentComponent,
    FontSizeDirective,
    HomeComponent,
    PaginaErrorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CursosModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [EstudianteArrService],
  bootstrap: [AppComponent],
})
export class AppModule {}
