import { ApiService } from './../../services/api.service';
import { IPermission } from '../../../assets/interfaces/interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-form-dialog-edit',
    templateUrl: './form-dialog-edit.component.html',
    styleUrls: ['./form-dialog-edit.component.scss']
})

export class FormDialogEditComponent implements OnInit {

    public formEdit!: FormGroup;
    public permissionList!: Array<IPermission>;

    constructor(
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

    private buildForm() {
        this.formEdit = this.formBuilder.group({
            name: [''],
            email: ['', [Validators.email]],
            password: ['', [Validators.minLength(8)]],
            permission: ['', [Validators.required]]
        })
    }

    public onSubmit(): void {

    }
}