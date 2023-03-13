import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSaved!: any;

  constructor() { }

  public saveData(data: any): void {
    this.dataSaved = data;
  }

  public getDataSaved(): any {
    return this.dataSaved;
  }

  public deleteDataSaved(): void {
    this.dataSaved = null;
  }
}
