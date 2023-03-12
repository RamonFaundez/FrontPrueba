import { IUserBody } from '../../../assets/interfaces/interfaces';
import { IPermission } from '../../../assets/interfaces/interfaces';
import { ApiService } from '../../services/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog-create.component.html',
  styleUrls: ['./form-dialog-create.component.scss']
})
export class FormDialogCreateComponent implements OnInit {
  public formCreate!: FormGroup;
  public permissionList!: IPermission[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FormDialogCreateComponent>,
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.getPermissions();
  }

  private getPermissions(): void {
    this.apiService.getAllPermissions().subscribe(res => {
      this.permissionList = res.data;
    });
  }

  private buildForm(): void {
    this.formCreate = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      permission: ['', [Validators.required]]
    })
  }

  public onSubmit(): void {
    if (this.formCreate.invalid) {
      return
    }
    const values = this.formCreate.value;
    const body: IUserBody = {
      name: values.name,
      email: values.email,
      password: values.password,
      permissionId: values.permission
    }

    //TODO Issue: add snackbar where response is OK or FAILED
    this.apiService.addUser(body).subscribe(res => {
      this.data = res.status;
    }, err => {
      console.error(err);
    }, () => {
      this.dialogRef.close(this.data);
    })
  }

  public onClose(): void {
    this.dialogRef.close()
  }
}