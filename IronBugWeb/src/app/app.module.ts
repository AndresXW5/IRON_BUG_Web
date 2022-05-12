

import { Routing } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterAlumnoComponent } from './components/register-alumno/register-alumno.component';
import { RegisterProfeComponent } from './components/register-profe/register-profe.component';
import { ProfileUserComponent } from './components/profile-user/profile-alumno.component';
import { ProfileProfeComponent } from './components/profile-profe/profile-profe.component';
import { LoginComponent } from './components/login/login.component';

import { APP_BASE_HREF } from '@angular/common';
import { RankingAdminComponent } from './components/ranking-admin/ranking-admin.component';
import { HttpClientModule } from '@angular/common/http';
// import { ModificarComponent } from './components/modificar/modificar.component';
import { EditProfileProfeComponent } from './components/edit-profile-profe/edit-profile-profe.component';
import { EditProfileUserComponent } from './components/edit-profile-user/edit-profile-user.component';
import { ProductosComponent } from './components/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterAlumnoComponent,
    RegisterProfeComponent,
    LoginComponent,
    ProfileProfeComponent,
    ProfileUserComponent,
    RankingAdminComponent,
    // ModificarComponent,
    EditProfileProfeComponent,
    EditProfileUserComponent,
    ProductosComponent,


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
