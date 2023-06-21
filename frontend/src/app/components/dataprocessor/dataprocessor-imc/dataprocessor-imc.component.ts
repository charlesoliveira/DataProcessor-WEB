import { Component } from '@angular/core';
import { Imc } from '../data.model';
import { Router } from '@angular/router';
import { DataprocessorService } from '../dataprocessor.service';

@Component({
  selector: 'app-dataprocessor-imc',
  templateUrl: './dataprocessor-imc.component.html',
  styleUrls: ['./dataprocessor-imc.component.css']
})
export class DataprocessorImcComponent {

  imcs: Imc[] = [];

  displayedColumns = ['imcMedio', 'faixaEtaria']

  constructor(
    private router: Router,
    private dataService: DataprocessorService
  ){}

  ngOnInit(): void {
    this.dataService.readImc().subscribe(imcs => {
      this.imcs = imcs
      console.log(this.imcs)
    })
  }

  navigateToDataCreate(): void {
    this.router.navigate(['/imc'])
  }

}
