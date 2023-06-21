import { Pessoa } from './../data.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataprocessorService } from '../dataprocessor.service';

@Component({
  selector: 'app-dataprocessor-read',
  templateUrl: './dataprocessor-read.component.html',
  styleUrls: ['./dataprocessor-read.component.css']
})
export class DataprocessorReadComponent {

  datas: Pessoa[] = [];
  // displayedColumns = ['nome', 'cpf', 'rg', 'data_nasc', 'sexo', 'mae', 'pai',
  //  'email', 'cep', 'endereco', 'numero', 'bairro', 'cidade', 'estado',
  //  'telefone_fixo', 'celular', 'altura', 'peso', 'tipo_sanguineo']

   displayedColumns = ['nome', 'email', 'celular', 'estado']

  constructor(
    private router: Router,
    private dataService: DataprocessorService
  ){}

  ngOnInit(): void {
    this.dataService.read().subscribe(datas => {
      this.datas = datas
      console.log(datas)
    })
  }

  navigateToDataCreate(): void {
    this.router.navigate(['/criarPessoas'])
  }

}
