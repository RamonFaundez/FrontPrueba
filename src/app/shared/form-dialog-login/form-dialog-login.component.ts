import { FormDialogCreateComponent } from './../form-dialog-create/form-dialog-create.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-diaog-login',
  templateUrl: './form-dialog-login.component.html',
  styleUrls: ['./form-dialog-login.component.scss']
})
export class FormDialogLoginComponent implements OnInit {
  public formLogin!: FormGroup;

  constructor(
    private matDialog: MatDialog,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  public onSubmit() {
    if (this.formLogin.invalid) {
      return;
    }
    console.log('obteniendo DATA')
  }

  public openDialogFormCreate() {
    const dialogRef = this.matDialog.open(FormDialogCreateComponent, {
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
      console.log('Issue TODO')
    });
  }
}
