import { MatDialog } from '@angular/material/dialog';
import { FormDialogLoginComponent } from './../form-dialog-login/form-dialog-login.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private matDialog: MatDialog
  ) { }

  public openDialogFormLogin() {
    const dialogRef = this.matDialog.open(FormDialogLoginComponent, {
      disableClose: true,
      panelClass: 'dialog',
      width: '450px',
      height: '600px',
      position: {
        bottom: ''
      },
      data: { status: ''
     }
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res === 'OK'){
        console.log('Aqui deberia existir información del usuario')
      }
    });
  }
}