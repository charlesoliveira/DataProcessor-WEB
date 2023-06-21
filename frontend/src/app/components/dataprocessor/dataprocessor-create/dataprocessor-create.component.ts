import { DataprocessorService } from './../dataprocessor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from '../data.model';

@Component({
  selector: 'app-dataprocessor-create',
  templateUrl: './dataprocessor-create.component.html',
  styleUrls: ['./dataprocessor-create.component.css']
})
export class DataprocessorCreateComponent {

  data:  Pessoa = {
    nome: 'String',
    cpf: 'String',
    rg: 'String',
    data_nasc: 'String',
    sexo: 'String',
    mae: 'String',
    pai: 'String',
    email: 'String',
    cep: 'String',
    endereco: 'String',
    numero: 0,
    bairro: 'String',
    cidade: 'String',
    estado: 'String',
    telefone_fixo: 'String',
    celular: 'String',
    altura: 0,
    peso: 0,
    tipo_sanguineo: 'String',
  }

  constructor(
    private dataProcessorService: DataprocessorService,
    private router: Router
  ){

  }

  ngOnInit(): void {
    
  }

  navigateToDataCreate(): void {
    this.router.navigate(['/criarPessoas'])
  }

  createData(): void {
    this.dataProcessorService.create(this.data).subscribe(() => {
    this.dataProcessorService.showMessage('Operação executada com sucesso!')
    this.router.navigate(['/listarPessoas'])
  })
}
  
  cancel(): void {
    this.router.navigate(['/listarPessoas'])
  }
}
