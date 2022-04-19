import { EditProfileProfeComponent } from './components/edit-profile-profe/edit-profile-profe.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterAlumnoComponent } from './components/register-alumno/register-alumno.component';
import { RegisterProfeComponent } from './components/register-profe/register-profe.component';
import { ProfileAlumnoComponent } from './components/profile-alumno/profile-alumno.component';
import { ProfileProfeComponent } from './components/profile-profe/profile-profe.component';
import { RankingsComponent } from './components/rankings/rankings.component';
import { RankingAdminComponent } from './components/ranking-admin/ranking-admin.component';
import { EditProfileAlumnoComponent } from './components/edit-profile-alumno/edit-profile-alumno.component';


const routes: Routes = [
  { path: 'ranking', component: RankingsComponent, pathMatch: 'full'},
  { path: 'adminRank', component: RankingAdminComponent, pathMatch: 'full'},
    { path: 'login', component: LoginComponent, pathMatch: 'full'},
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'ralumno', component: RegisterAlumnoComponent, pathMatch: 'full'},
    { path: 'rprofe', component: RegisterProfeComponent, pathMatch: 'full'},
    { path: 'palumno', component: ProfileAlumnoComponent, pathMatch: 'full'},
    { path: 'pprofe', component: ProfileProfeComponent, pathMatch: 'full'},
    { path: 'editar-profe', component: EditProfileProfeComponent, pathMatch: 'full'},
    { path: 'editar-alumno', component: EditProfileAlumnoComponent, pathMatch: 'full'},

  { path: '**', redirectTo: '/register' } //Dejar la ultima
  ];

export const Routing = RouterModule.forRoot(routes);
