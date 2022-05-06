
import { Routing } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterAlumnoComponent } from './components/register-alumno/register-alumno.component';
import { RegisterProfeComponent } from './components/register-profe/register-profe.component';
import { ProfileAlumnoComponent } from './components/profile-alumno/profile-alumno.component';
import { ProfileProfeComponent } from './components/profile-profe/profile-profe.component';
import { LoginComponent } from './components/login/login.component';

import { APP_BASE_HREF } from '@angular/common';
import { RankingsComponent } from './components/rankings/rankings.component';
import { RankingAdminComponent } from './components/ranking-admin/ranking-admin.component';
import { HttpClientModule } from '@angular/common/http';
// import { ModificarComponent } from './components/modificar/modificar.component';
import { EditProfileProfeComponent } from './components/edit-profile-profe/edit-profile-profe.component';
import { EditProfileAlumnoComponent } from './components/edit-profile-alumno/edit-profile-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterAlumnoComponent,
    RegisterProfeComponent,
    LoginComponent,
    ProfileProfeComponent,
    ProfileAlumnoComponent,
    RankingsComponent,
    RankingAdminComponent,
    // ModificarComponent,
    EditProfileProfeComponent,
    EditProfileAlumnoComponent,


    ],
  imports: [
  BrowserModule,
  ReactiveFormsModule,
  FormsModule,
  Routing,
  HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent],
})
export class AppModule { }
