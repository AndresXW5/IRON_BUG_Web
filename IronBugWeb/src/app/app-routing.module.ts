import { ConfirmarPedidoComponent } from './components/confirmar-pedido/confirmar-pedido.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { EditProfileAdminComponent } from './components/edit-profile-profe/edit-profile-admin.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RegisterProfeComponent } from './components/register-profe/register-profe.component';
import { ProfileAdminComponent } from './components/profile-profe/profile-admin.component';
import { EditProfileUserComponent } from './components/edit-profile-user/edit-profile-user.component';
import { ProductosComponent } from './components/productos/productos.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent, pathMatch: 'full'},
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'ralumno', component: RegisterUserComponent, pathMatch: 'full'},
    { path: 'rprofe', component: RegisterProfeComponent, pathMatch: 'full'},
    { path: 'palumno', component: ProfileUserComponent, pathMatch: 'full'},
    { path: 'pprofe', component: ProfileAdminComponent, pathMatch: 'full'},
    { path: 'editar-profe', component: EditProfileAdminComponent, pathMatch: 'full'},
    { path: 'editar-alumno', component: EditProfileUserComponent, pathMatch: 'full'},
    { path: 'productos', component: ProductosComponent, pathMatch: 'full'},
    { path: 'confirmar-prod', component: ConfirmarPedidoComponent, pathMatch: 'full'},

  { path: '**', redirectTo: '/register' } //Dejar la ultima
  ];

export const Routing = RouterModule.forRoot(routes);
