import { Component } from '@angular/core';
import { Pessoa, QtdUF } from '../data.model';
import { Router } from '@angular/router';
import { DataprocessorService } from '../dataprocessor.service';

@Component({
  selector: 'app-dataprocessor-qtduf',
  templateUrl: './dataprocessor-qtduf.component.html',
  styleUrls: ['./dataprocessor-qtduf.component.css']
})
export class DataprocessorQtdufComponent {

  qtds: QtdUF[] = [];

  displayedColumns = ['qtdPessoas', 'estado']

  constructor(
    private router: Router,
    private dataService: DataprocessorService
  ){}

  ngOnInit(): void {
    this.dataService.readQtds().subscribe(qtds => {
      this.qtds = qtds
      console.log(qtds)
    })
  }

  navigateToDataCreate(): void {
    this.router.navigate(['/criarPessoas'])
  }
}
