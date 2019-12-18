import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { RemplissageService } from '../../services/remplissage.service';
import { TableHead, TableRow, TableData, Table } from '../../Utils/Utils';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { constructor } from 'q';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    table: Table;
    dataSource: MatTableDataSource<object>;
    displayedColumns: string[] = [];

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    @Input() url: string;
    constructor(private serviceRemplissage: RemplissageService) {}

    ngOnInit() {
        this.serviceRemplissage.generateTable(this.url).then((t: Table): void => {
            // tslint:disable-next-line: no-string-literal
            for (const col of t.getColumns()) {
                this.displayedColumns.push(col);
            }
            if (this.displayedColumns.indexOf('id') === -1) {
                this.displayedColumns.unshift('id');
            }
            this.table = t;
            this.dataSource = new MatTableDataSource(t.getContent());
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            console.log(this.table);

            // test
            this.serviceRemplissage.generateTableFromString();
        });
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
