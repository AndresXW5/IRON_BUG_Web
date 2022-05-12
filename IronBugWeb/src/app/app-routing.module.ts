import { ProfileUserComponent } from './components/profile-user/profile-alumno.component';
import { EditProfileProfeComponent } from './components/edit-profile-profe/edit-profile-profe.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterAlumnoComponent } from './components/register-alumno/register-alumno.component';
import { RegisterProfeComponent } from './components/register-profe/register-profe.component';
import { ProfileProfeComponent } from './components/profile-profe/profile-profe.component';
import { RankingAdminComponent } from './components/ranking-admin/ranking-admin.component';
import { EditProfileUserComponent } from './components/edit-profile-user/edit-profile-user.component';
import { ProductosComponent } from './components/productos/productos.component';


const routes: Routes = [
    { path: 'adminRank', component: RankingAdminComponent, pathMatch: 'full'},
    { path: 'login', component: LoginComponent, pathMatch: 'full'},
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'ralumno', component: RegisterAlumnoComponent, pathMatch: 'full'},
    { path: 'rprofe', component: RegisterProfeComponent, pathMatch: 'full'},
    { path: 'palumno', component: ProfileUserComponent, pathMatch: 'full'},
    { path: 'pprofe', component: ProfileProfeComponent, pathMatch: 'full'},
    { path: 'editar-profe', component: EditProfileProfeComponent, pathMatch: 'full'},
    { path: 'editar-alumno', component: EditProfileUserComponent, pathMatch: 'full'},
    { path: 'productos', component: ProductosComponent, pathMatch: 'full'},

  { path: '**', redirectTo: '/register' } //Dejar la ultima
  ];

export const Routing = RouterModule.forRoot(routes);
