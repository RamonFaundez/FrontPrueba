import { DataService } from './../../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { FormDialogLoginComponent } from './../form-dialog-login/form-dialog-login.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public textButton = 'Iniciar sesión';

  constructor(
    private matDialog: MatDialog,
    private _router: Router,
    private dataService: DataService
  ) { }

  public openDialogFormLogin(option: string): void {
    if (option === 'Iniciar sesión') {
      const dialogRef = this.matDialog.open(FormDialogLoginComponent, {
        disableClose: true,
        panelClass: 'dialog',
        width: '450px',
        height: '600px',
        position: {
          bottom: ''
        },
        data: {
          status: ''
        }
      });

      dialogRef.afterClosed().subscribe(res => {
        if (!!res) {
          this.dataService.saveData(res);
          this.textButton = 'Cerrar sesión'
          this._router.navigate(['/'])
        }
      });
    } else {
      this.textButton = 'Iniciar sesión';
      this.dataService.deleteDataSaved();
    }
  }
}