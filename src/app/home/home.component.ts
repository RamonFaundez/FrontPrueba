import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
    public userName!: string;

    constructor (
        private dataService:DataService
    ){}

    ngOnInit(): void {
        const dataName = this.dataService.getDataSaved();
        this.userName = !!dataName ? dataName.name : '';
    }
}
