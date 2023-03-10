import { LoginComponent } from './login/login.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { AccessComponent } from './access/access.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent,
    pathMatch: 'full'
  },
  {
    path: 'access',
    component: AccessComponent,
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'permissions',
    component: PermissionsComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
