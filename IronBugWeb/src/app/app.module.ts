
import { Routing } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RegisterProfeComponent } from './components/register-profe/register-profe.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { ProfileAdminComponent } from './components/profile-profe/profile-admin.component';
import { LoginComponent } from './components/login/login.component';

import { APP_BASE_HREF } from '@angular/common';
import { EditProfileAdminComponent } from './components/edit-profile-profe/edit-profile-admin.component';
import { EditProfileUserComponent } from './components/edit-profile-user/edit-profile-user.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ConfirmarPedidoComponent } from './components/confirmar-pedido/confirmar-pedido.component';
import { HttpClientModule } from '@angular/common/http';
//Librerias para traduccion
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HomeEnComponent } from './components/home-en/home-en.component';
import { LoginEnComponent } from './components/login-en/login-en.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterUserComponent,
    RegisterProfeComponent,
    LoginComponent,
    ProfileAdminComponent,
    ProfileUserComponent,
    // ModificarComponent,
    EditProfileAdminComponent,
    EditProfileUserComponent,
    ProductosComponent,
    ConfirmarPedidoComponent,
    HomeEnComponent,
    LoginEnComponent,

    ],
  imports: [
  BrowserModule,
  ReactiveFormsModule,
  FormsModule,
  Routing,
  HttpClientModule,
  TranslateModule,
  TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent],
})
export class AppModule { }
