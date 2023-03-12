import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule  } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule  } from "@angular/material/dialog";
import { MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
    imports: [
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,
        MatToolbarModule
    ],
    exports: [
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,
        MatToolbarModule
    ],
    declarations: []
})

export class CustomMaterialModule { }