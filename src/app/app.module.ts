import { CustomMaterialModule } from './../assets/common/material.module';
import { CustomModule } from './../assets/common/custom.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AccessComponent } from './access/access.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { FormDialogLoginComponent } from './shared/form-dialog-login/form-dialog-login.component';
import { FormDialogCreateComponent } from './shared/form-dialog-create/form-dialog-create.component';
import { FormDialogEditComponent } from './shared/form-dialog-edit/form-dialog-edit.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
    UsersComponent,
    AccessComponent,
    PermissionsComponent,
    FormDialogLoginComponent,
    FormDialogCreateComponent,
    FormDialogEditComponent,
    NavbarComponent,
  ],
  imports: [
    CustomModule,
    CustomMaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
