import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../services/api.service';
import { ILog, IUser } from '../../assets/interfaces/interfaces';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent implements OnInit {
  public dataSource!: any;
  public displayedColumns: Array<string> = ['id', 'name', 'email', 'timestamp'];
  private logsList!: Array<ILog>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.getAllLogs();
  }

  private getAllLogs(): void {
    this.apiService.getAllLogs().subscribe(res => {
      this.logsList = res.data;
    }, err => {
      console.error(err);
    }, () => {
      this.getLogUser();
    });
  }

  private getLogUser(): void {
    let mergedList: Array<{
      id: string;
      user: string;
      email: string;
      timestamp: string;
    }> = [];
    this.logsList.forEach(log => {
      this.apiService.getUser(log.userId).subscribe(res => {
        mergedList.push({
          id: log.id,
          user: res.data.name,
          email: res.data.email,
          timestamp: log.createdAt
        })
      }, err => {
        if (err.error.data) {
          mergedList.push({
            id: log.id,
            user: log.userId,
            email: '-',
            timestamp: log.createdAt
          })
        }
      }, () => {
        this.dataSource = new MatTableDataSource<any>(mergedList);
        this.dataSource.paginator = this.paginator;
      })
    })
  }
}
