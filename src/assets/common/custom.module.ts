import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    imports: [
        HttpClientModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule
    ],
    exports: [
        HttpClientModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule
    ]
})

export class CustomModule { }