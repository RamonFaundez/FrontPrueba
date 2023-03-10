import { IPermission } from './../../assets/interfaces/interfaces';
import { FormDialogComponent } from './../shared/form-dialog/form-dialog.component';
import { ApiService } from './../services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { IUser } from '../../assets/interfaces/interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public usersList: IUser[] = [];
  private roleList: IPermission[] = [];
  public displayedColumns: string[] = ['name', 'role', 'createdAt', 'updatedAt', 'actions'];
  public dataSource!: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private apiService: ApiService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  private getAllUsers() {
    this.apiService.getAllUsers().subscribe((res) => {
      if (typeof (res.data) === typeof (this.usersList)) {
        this.usersList = res.data
      }
    }, err => {
      console.error(err);
    }, () => {
      this.getAllRoles()
    });
  }

  private getAllRoles() {
    this.apiService.getAllPermissions().subscribe(res => {
      this.roleList = res.data;
    }, err => {
      console.error(err)
    }, () => {
      this.roleList.map(x => {
        this.usersList.map(y => {
          if (x.id === y.permissionId) {
            y.permissionId = x.role;
          }
        })
      })
      this.dataSource = new MatTableDataSource<IUser>(this.usersList);
      this.dataSource.paginator = this.paginator;
    })
  }

  public onClickDelete(userId: string) {
    this.apiService.deleteUser(userId).subscribe(_ => {
    }, err => {
      console.error(err);
    }, () => {
      this.getAllUsers();
    });
  }

  public openDialogForm() {
    const dialogRef = this.matDialog.open(FormDialogComponent, {
      panelClass: 'dialog',
      width: '400px',
      height: '400px',
      position: {
        bottom: ''
      },
      data: {status:''}
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res === 'OK'){
        this.getAllUsers();
      }
    })
  }
}