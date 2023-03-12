import { MatDialog } from '@angular/material/dialog';
import { FormDialogLoginComponent } from './../form-dialog-login/form-dialog-login.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  constructor(
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.openDialogFormLogin();
  }

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