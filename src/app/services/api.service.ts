import { ILog, ILogBody, IUser, IUserBody, IPermission } from '../../assets/interfaces/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { URL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllUsers(): Observable<{ status: string, data: IUser[] }> {
    const url = URL.ENDPOINT;
    return this.http.get<{ status: string, data: IUser[] }>(url);
  }

  public getUser(userId: string): Observable<{ status: string, data: IUser }> {
    const url = `${URL.ENDPOINT}/${userId}`;
    return this.http.get<{ status: string, data: IUser }>(url);
  }

  public addUser(body: IUserBody): Observable<{ status: string, data: IUser }> {
    const url = URL.ENDPOINT;
    return this.http.post<{ status: string, data: IUser }>(url, body)
  }

  public updateUser(userId: string, body: IUserBody): Observable<{ status: string, data: IUser }> {
    const url = `${URL.ENDPOINT}/${userId}`;
    return this.http.patch<{ status: string, data: IUser }>(url, body);
  }

  public deleteUser(userId: string): Observable<{}> {
    const url = `${URL.ENDPOINT}/${userId}`;
    return this.http.delete(url);
  }

  public getAllLogs(): Observable<{ status: string, data: ILog[] }> {
    const url = `${URL.ENDPOINT}/logs`;
    return this.http.get<{ status: string, data: ILog[] }>(url);
  }

  public getAllLogsOneUser(userId: string): Observable<{ status: string, data: ILog[] }> {
    const url = `${URL.ENDPOINT}/logs/${userId}`;
    return this.http.get<{ status: string, data: ILog[] }>(url);
  }

  public checkLogin(body: ILogBody): Observable<{ status: string, data: IUser }> {
    const url = `${URL.ENDPOINT}/login`;
    return this.http.post<{ status: string, data: IUser }>(url, body);
  }

  public getAllPermissions(): Observable<{ status: string, data: IPermission[] }> {
    const url = `${URL.ENDPOINT}/permission`
    return this.http.get<{ status: string, data: IPermission[] }>(url);
  }

}