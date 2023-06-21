import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataprocessorListallDataSource, DataprocessorListallItem } from './dataprocessor-listall-datasource';
import { Router } from '@angular/router';
import { DataprocessorService } from '../dataprocessor.service';
import { Pessoa } from '../data.model';

@Component({
  selector: 'app-dataprocessor-listall',
  templateUrl: './dataprocessor-listall.component.html',
  styleUrls: ['./dataprocessor-listall.component.css']
})
export class DataprocessorListallComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataprocessorListallItem>;
  dataSource: DataprocessorListallDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  // displayedColumns = ['id', 'name'];

  datas!: Pessoa[];

  displayedColumns = ['nome', 'email', 'celular', 'estado']

  constructor(
    private router: Router,
    private dataService: DataprocessorService
  ) {

    this.dataSource = new DataprocessorListallDataSource();
  }

  ngOnInit(): void {
    this.dataService.read().subscribe(datas => {
      this.datas = datas
      console.log(datas)
    })
  }
  
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  navigateToDataCreate(): void {
    this.router.navigate(['/criarPessoas'])
  }
}
