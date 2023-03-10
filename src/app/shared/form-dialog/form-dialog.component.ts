import { IUserBody } from './../../../assets/interfaces/interfaces';
import { IPermission } from '../../../assets/interfaces/interfaces';
import { ApiService } from './../../services/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent implements OnInit {
  public formEdit!: FormGroup;
  public permissionList!: IPermission[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FormDialogComponent>,
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.getPermissions();
  }

  private getPermissions() :void{
    this.apiService.getAllPermissions().subscribe(res => {
      this.permissionList = res.data;
    });
  }

  private buildForm() :void{
    this.formEdit = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      permission: ['', [Validators.required]]
    })
  }

  public onSubmit() :void{
    if (this.formEdit.invalid) {
      return
    }
    const values = this.formEdit.value;
    const body: IUserBody = {
      name: values.name,
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

  public onClose():void{
    this.dialogRef.close()
  }
}