import { MatTableDataSource } from '@angular/material/table';
import { IPermission } from '../../assets/interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {

  public roleList!: Array<IPermission>;
  public displayedColumns: Array<string> = ['role','usersTable', 'permissionsTable', 'logsTable']
  public dataSource!: any;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getAllPermissions()
  }

  private getAllPermissions(): void {
    this.apiService.getAllPermissions().subscribe(res => {
      this.dataSource = new MatTableDataSource<IPermission>(res.data);
    })
  }

}
