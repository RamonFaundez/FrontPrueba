import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUser } from '../../../assets/interfaces/interfaces';
import { ApiService } from '../../services/api.service';
import { FormDialogCreateComponent } from '../form-dialog-create/form-dialog-create.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-diaog-login',
  templateUrl: './form-dialog-login.component.html',
  styleUrls: ['./form-dialog-login.component.scss']
})
export class FormDialogLoginComponent implements OnInit {
  public formLogin!: FormGroup;
  private dataResponse!: IUser;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FormDialogLoginComponent>,
    private matDialog: MatDialog,
    private formBuilder: FormBuilder,
    private apiService: ApiService
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
    const values = this.formLogin.value;
    const body = {
      email: values.email,
      password: values.password
    }

    this.apiService.checkLogin(body).subscribe(res => {
      this.dataResponse = res.data;
    }, err => {
      console.error(err);
    }, () => {
      this.dialogRef.close(this.dataResponse);
    })
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
      this.matDialog.closeAll()
    });
  }
}
